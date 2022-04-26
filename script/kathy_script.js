var triggerTabList = [].slice.call(document.querySelectorAll('#myTab a'))
triggerTabList.forEach(function (triggerEl) {
  var tabTrigger = new bootstrap.Tab(triggerEl)

  triggerEl.addEventListener('click', function (event) {
    event.preventDefault()
    tabTrigger.show()
  })
})

var triggerEl = document.querySelector('#myTab a[href="#profile"]')
bootstrap.Tab.getInstance(triggerEl).show() // Select tab by name

var triggerFirstTabEl = document.querySelector('#myTab li:first-child a')
bootstrap.Tab.getInstance(triggerFirstTabEl).show() // Select first tab

var someListItemEl = document.querySelector('#someListItem')
var tab = new bootstrap.Tab(someListItemEl)

tab.show()

$( document ).ready(function() {
    
  "use strict";
  
  var todo = function() { 
      $('.todo-list .todo-item input').click(function() {
      if($(this).is(':checked')) {
          $(this).parent().parent().parent().toggleClass('complete');
      } else {
          $(this).parent().parent().parent().toggleClass('complete');
      }
  });
  
  $('.todo-nav .all-task').click(function() {
      $('.todo-list').removeClass('only-active');
      $('.todo-list').removeClass('only-complete');
      $('.todo-nav li.active').removeClass('active');
      $(this).addClass('active');
  });
  
  $('.todo-nav .active-task').click(function() {
      $('.todo-list').removeClass('only-complete');
      $('.todo-list').addClass('only-active');
      $('.todo-nav li.active').removeClass('active');
      $(this).addClass('active');
  });
  
  $('.todo-nav .completed-task').click(function() {
      $('.todo-list').removeClass('only-active');
      $('.todo-list').addClass('only-complete');
      $('.todo-nav li.active').removeClass('active');
      $(this).addClass('active');
  });
  
  $('#uniform-all-complete input').click(function() {
      if($(this).is(':checked')) {
          $('.todo-item .checker span:not(.checked) input').click();
      } else {
          $('.todo-item .checker span.checked input').click();
      }
  });
  
  $('.remove-todo-item').click(function() {
      $(this).parent().remove();
  });
  };
  
  todo();
  
  $(".add-task").keypress(function (e) {
      if ((e.which == 13)&&(!$(this).val().length == 0)) {
          $('<div class="todo-item"><div class="checker"><span class=""><input type="checkbox"></span></div> <span>' + $(this).val() + '</span> <a href="javascript:void(0);" class="float-right remove-todo-item"><i class="icon-close"></i></a></div>').insertAfter('.todo-list .todo-item:last-child');
          $(this).val('');
      } else if(e.which == 13) {
          alert('Please enter new task');
      }
      $(document).on('.todo-list .todo-item.added input').click(function() {
          if($(this).is(':checked')) {
              $(this).parent().parent().parent().toggleClass('complete');
          } else {
              $(this).parent().parent().parent().toggleClass('complete');
          }
      });
      $('.todo-list .todo-item.added .remove-todo-item').click(function() {
          $(this).parent().remove();
      });
  });
});