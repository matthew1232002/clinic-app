// window.onload = function () {
//   function documentActions(event) {
//     const targetElement = event.target;
//     console.log(targetElement)
//     if (targetElement.closest('.sidebar-form__input-wrapper') && document.querySelectorAll('.sidebar-form__input-wrapper._focused').length > 0) {
//       const wrappers = document.querySelectorAll('.sidebar-form__input-wrapper._focused');
//       for( let i of wrappers) {
//         i.classList.remove('_focused');
//       }
//     }
//     if (targetElement.classList.contains('sidebar-form__input')) {
//       targetElement.closest('.sidebar-form__input-wrapper').classList.add('_focused');
//     }
//
//     if (!targetElement.classList.contains('_focused') && !targetElement.closest('.sidebar-form__input-wrapper')) {
//       const focusedEl = document.querySelector('._focused');
//       focusedEl.classList.remove('_focused');
//     }
//   }
//
//   document.addEventListener('click', documentActions);
// }
