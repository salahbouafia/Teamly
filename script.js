		let tasks = [];
        let currentMonth = new Date().getMonth();
        let currentYear = new Date().getFullYear();
        
		function toggleSidebar() {
            document.getElementById("sidebar").classList.toggle("hidden");
            document.getElementById("mainContent").classList.toggle("full-width");
        }
		
        function switchView(view) {
            document.getElementById('task-list-view').style.display = (view === 'task-list') ? 'block' : 'none';
            document.getElementById('calendar-view').style.display = (view === 'calendar') ? 'block' : 'none';
            updateCalendar();
        }
        
        function toggleTheme() {
            document.body.classList.toggle("dark-mode");
        }
		
		function toggleAccountMenu() {
            document.getElementById("accountDropdown").classList.toggle("show");
        }
		
		function toggleChat() {
			document.getElementById("chatBox").classList.toggle("show");
        }
		function sendMessage() {
            let chatInput = document.getElementById("chatInput");
            let chatBody = document.getElementById("chatBody");
            let message = chatInput.value.trim();
            
            if (message !== "") {
                let msgElement = document.createElement("div");
                msgElement.className = "message user";
                msgElement.textContent = message;
                chatBody.appendChild(msgElement);
                chatInput.value = "";
                chatBody.scrollTop = chatBody.scrollHeight;
            }
        }
        
        function addTask() {
            const taskInput = document.getElementById("newTask");
            const taskDate = document.getElementById("taskDate").value;
            if (taskInput.value.trim() !== "" && taskDate) {
                tasks.push({ title: taskInput.value, date: taskDate });
                updateCalendar();
                taskInput.value = "";
            }
        }
        
        function updateCalendar() {
            const calendar = document.getElementById("calendar");
            calendar.innerHTML = "";
            document.getElementById("currentMonth").textContent = new Date(currentYear, currentMonth).toLocaleString('default', { month: 'long', year: 'numeric' });
            
            let daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
            for (let i = 1; i <= daysInMonth; i++) {
                const date = `${currentYear}-${(currentMonth + 1).toString().padStart(2, '0')}-${i.toString().padStart(2, '0')}`;
                const day = document.createElement("div");
                day.classList.add("day");
                day.textContent = i;
                tasks.filter(t => t.date === date).forEach(t => {
                    const taskElement = document.createElement("div");
                    taskElement.classList.add("task");
                    taskElement.textContent = t.title;
                    day.appendChild(taskElement);
                });
                calendar.appendChild(day);
            }
        }
        
        function changeMonth(direction) {
            currentMonth += direction;
            if (currentMonth < 0) {
                currentMonth = 11;
                currentYear--;
            } else if (currentMonth > 11) {
                currentMonth = 0;
                currentYear++;
            }
            updateCalendar();
        }