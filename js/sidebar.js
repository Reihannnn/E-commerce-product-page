const sidebar = document.querySelector(".sidebar-section")
const closeSidebarButton = document.querySelector('.sidebar-close-button')
const openSidebarButton = document.querySelector('.logo-menu')

// function openSidebar(){
  // }
  
  // function closeSidebar(){
    // }
    
  closeSidebarButton.addEventListener('click' , () =>{
      
      sidebar.style.display = 'none'
      sectionLightBox_Opacity_Bg.style.display = 'none'
    })
    
  openSidebarButton.addEventListener("click", () =>{
  sidebar.style.display = 'block'
  sectionLightBox_Opacity_Bg.style.display = 'block'
  
})