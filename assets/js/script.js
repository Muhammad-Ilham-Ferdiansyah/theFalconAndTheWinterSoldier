function scrollToBottom() {
    window.scroll({
     top: document.body.scrollHeight,
     left: 0,
     behavior: 'smooth'
    });
   };
  
   function scrollByUnits() {
    window.scrollBy({
     top: 300,
     left: 0,
     behavior: 'smooth'
    });
   };

   function scrollToElementEpisode() {
    document.querySelector('#episode').scrollIntoView({
     behavior: 'smooth'
    });
   };

   function scrollToElementOrigin() {
    document.querySelector('#origin').scrollIntoView({
     behavior: 'smooth'
    });
   };
  
   function scrollToTop() {
    document.querySelector('#home').scrollIntoView({
     behavior: 'smooth'
    });
   };