    //1. wHEN WE Click the add
        //2. get the text from the input
        //3. display it on the webpage
        //4. every time we put input our previous string get change so we dont want
        //5. put the text on the array/ or we save in variable.
        //6. want every value display below need block tag


        //object 
        // 1. now date we put 
        // 2. inside array we use object to group them together
        let todoList = JSON.parse(localStorage.getItem('todoList')) || [
            {
                name:'diwash Sherma',
                dueDate: '2022-05-15'
            }, //index 0
            {
                name:'Samjhana Limbu',
                dueDate: '2022-05-15'

            }//index 1

        ];
        // const displayTodo= document.querySelector('.container');
        // displayTodo.innerHTML= name;

        // todoList= JSON.parse(localStorage.getItem('todoList'));

        render();


        function todoApp() {

            //get the input element
            const inputElement = document.querySelector('.js-todo-input');
            //get the text from the input
            const name = inputElement.value;
      // If the input is empty, return without adding a new todo

      console.log(name);
            //get the input date element
            const dateElement = document.querySelector('.js-dueDate-input');
            //get the date text from the input
            const dueDate = dateElement.value;

            console.log(dueDate)
           if (name === '' || dueDate === '') {
                return;
            }

            // Add the new todo to the list
            todoList.push({
                name,dueDate
            });

            
            // store in localstorage
            localStorage.setItem('todoList', JSON.stringify(todoList));


            //display todo on html webpage
            render();

            //reset the input element
            inputElement.value = '';
            dateElement.value='';





        }

        function render() {
            let todo = '';

            for (let i = 0; i < todoList.length; i++) {
                let todoListName = todoList[i].name;
                let todoListDate= todoList[i].dueDate;
                /// every time loop and store the value of todlist list array it ganna 
                //store in todoListName
                //and display in html webpage
                const html = `
                <div> ${todoListName} </div>
                <div> ${todoListDate} </div>
                <button onclick="deleteElement(${i})" class="delete-todo-button"> Delete</button>
                
                `
                // console.log(html);
                todo = todo + html;
            }
            const displayTodo = document.querySelector('.container');
            displayTodo.innerHTML = todo;

        }

        function deleteElement(index)
        {
            todoList.splice(index, 1)
            localStorage.setItem('todoList', JSON.stringify(todoList));
            render();

        }


        function todoEnter(event) {
            
            if (event.key === 'Enter') {
                todoApp();
            }
        }
