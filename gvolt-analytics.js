/* GVOLT 3D — analytics sem cookies de rastreamento. Coleta opcional após consentimento. */
(()=>{'use strict';
  const allowedTypes=new Set(['page_view','product_view','whatsapp_click','custom_quote_start','custom_quote_submit']);
  const validPages=new Set(['index','product','personalizados','sazonais']);
  const path=(location.pathname.split('/').pop()||'index.html').replace(/\.html$/,'');
  if(!validPages.has(path))return;
  const key='gvolt_analytics_consent_v1', sourceKey='gvolt_analytics_source_v1';
  const page=path;let choice=null;try{choice=localStorage.getItem(key)}catch{}
  function getSource(){
    let source='direto';
    try{
      const param=new URLSearchParams(location.search).get('utm_source');
      if(param){const v=param.toLowerCase();source=/instagram|insta/.test(v)?'instagram':/google/.test(v)?'google':/facebook|fb/.test(v)?'facebook':'campanha';}
      else if(document.referrer){const h=new URL(document.referrer).hostname.toLowerCase();
        if(/(^|\.)instagram\.com$/.test(h))source='instagram';
        else if(/(^|\.)google\./.test(h))source='google';
        else if(/(^|\.)facebook\.com$/.test(h)||/(^|\.)fb\.com$/.test(h))source='facebook';
        else if(h!==location.hostname)source='outros_sites';
      }
      const saved=sessionStorage.getItem(sourceKey);
      if(source==='direto'&&saved)source=saved;
      else sessionStorage.setItem(sourceKey,source);
    }catch{}
    return source;
  }
  let source=choice==='yes'?getSource():'direto';
  let sb=null;
  function client(){if(!sb&&window.supabase&&window.SUPABASE_URL&&window.SUPABASE_KEY)sb=window.supabase.createClient(window.SUPABASE_URL,window.SUPABASE_KEY);return sb;}
  function track(eventType,productId=null){
    if(choice!=='yes'||!allowedTypes.has(eventType))return;
    const c=client();if(!c)return;
    const pid=String(productId||'').slice(0,120)||null;
    // Não coleta dados pessoais, URL visitada, texto digitado ou IP no banco.
    c.from('store_events').insert({event_type:eventType,source,page,product_id:pid}).then(({error})=>{
      if(error)console.debug('GVolt: métrica não registrada',error.code);
    }).catch(()=>{});
  }
  window.GVoltAnalytics={track,get consent(){return choice;},source};
  function pageView(){track('page_view')}
  function showNotice(){
    if(choice==='yes'||choice==='no')return;
    const notice=document.createElement('aside');notice.className='analytics-notice';notice.setAttribute('aria-label','Preferências de privacidade');
    notice.innerHTML='<div><strong>Privacidade na GVolt 3D</strong><p>Podemos contar visitas e cliques para melhorar a loja? Não coletamos dados pessoais nesta medição. Você pode recusar.</p></div><div class="analytics-actions"><button type="button" data-consent="no">Recusar</button><button type="button" data-consent="yes">Permitir métricas</button></div>';
    notice.addEventListener('click',e=>{const b=e.target.closest('[data-consent]');if(!b)return;choice=b.dataset.consent;try{localStorage.setItem(key,choice)}catch{};notice.remove();if(choice==='yes'){source=getSource();pageView();}});
    document.body.appendChild(notice);
  }
  document.addEventListener('click',e=>{const a=e.target.closest('a[href*="wa.me/"]');if(a)track('whatsapp_click',a.dataset.productId||null);},true);
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',()=>{if(choice==='yes'){source=getSource();pageView();}else showNotice()});
  else {if(choice==='yes'){source=getSource();pageView();}else showNotice()}
})();
