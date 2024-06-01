document.addEventListener('DOMContentLoaded', () => {
    const searchTermInput = document.getElementById('search-term');
    const allintextInput = document.getElementById('allintext');
    const allintitleInput = document.getElementById('allintitle');
    const inurlInput = document.getElementById('inurl');
    const filetypeInput = document.getElementById('filetype');
    const siteInput = document.getElementById('site');
    const excludeInput = document.getElementById('exclude');
    const exactInput = document.getElementById('exact');
    const orTermsInput = document.getElementById('orTerms');
    const aroundTermsInput = document.getElementById('aroundTerms');
    const searchLinkInput = document.getElementById('search-link');
    const searchButton = document.getElementById('search-button');
  
    const updateSearchLink = () => {
      const searchTerm = searchTermInput.value.trim();
      const allintext = allintextInput.value.trim();
      const allintitle = allintitleInput.value.trim();
      const inurl = inurlInput.value.trim();
      const filetype = filetypeInput.value.trim();
      const site = siteInput.value.trim();
      const exclude = excludeInput.value.trim();
      const exact = exactInput.value.trim();
      const orTerms = orTermsInput.value.trim();
      const aroundTerms = aroundTermsInput.value.trim();
      
      let searchLink = 'https://www.google.com/search?q=';
  
      if (allintext) {
        searchLink += `allintext:${allintext} `;
      }
      if (allintitle) {
        searchLink += `allintitle:${allintitle} `;
      }
      if (inurl) {
        searchLink += `inurl:${inurl} `;
      }
      if (filetype) {
        searchLink += `filetype:${filetype} `;
      }
      if (site) {
        searchLink += `site:${site} `;
      }
      if (exclude) {
        searchLink += `-${exclude} `;
      }
      if (exact) {
        searchLink += `"${exact}" `;
      }
      if (orTerms) {
        searchLink += `${orTerms.replace(/ OR /g, '|')} `;
      }
      if (aroundTerms) {
        searchLink += `${aroundTerms} `;
      }
      if (searchTerm) {
        searchLink += `${searchTerm}`;
      }
  
      searchLinkInput.value = searchLink.trim();
    };
  
    searchTermInput.addEventListener('input', updateSearchLink);
    allintextInput.addEventListener('input', updateSearchLink);
    allintitleInput.addEventListener('input', updateSearchLink);
    inurlInput.addEventListener('input', updateSearchLink);
    filetypeInput.addEventListener('input', updateSearchLink);
    siteInput.addEventListener('input', updateSearchLink);
    excludeInput.addEventListener('input', updateSearchLink);
    exactInput.addEventListener('input', updateSearchLink);
    orTermsInput.addEventListener('input', updateSearchLink);
    aroundTermsInput.addEventListener('input', updateSearchLink);
  
    searchButton.addEventListener('click', () => {
      window.open(searchLinkInput.value, '_blank');
    });
  });
  