<script>
	import '../app.css';
	import Plus from 'svelte-material-icons/Plus.svelte';
	import { v4 as uuidv4 } from 'uuid'; // Import UUID library

	// managing data
	let formData = '';
	let todoData = [];
	// handling submit button
	function handleSubmit() {
		const newTodo = { id: uuidv4(), formData };
		todoData = [...todoData, newTodo];
		formData = '';
	}

	// removing todo
	function handleRemoveTodo(index) {
		todoData = [...todoData.slice(0, index), ...todoData.slice(index + 1)];
	}
</script>

<main>
	<div class=" bg-gray-900 w-[100%] h-[100vh]">
		<!-- heading  -->
		<h2 class=" text-center w-[100%] shadow-lg p-4 text-white font-bold text-2xl">
			Todo Web Application
		</h2>
		<!-- input of todo task and image stuff-->
		<div class="flex justify-evenly items-center">
			<div
				class=" w-[60%] rounded-lg m-10 p-4 shadow-lg h-[80vh] bg-violet-950 overflow-scroll no-scrollbar"
			>
				<form action="" class=" " on:submit|preventDefault={handleSubmit}>
					<label for="" class=" m-5 ml-0 font-serif p-2 text-2xl font-bold text-red-400"
						>Create Task</label
					><br />
					<div class="border-2 border-gray-600 flex justify-evenly items-center rounded-md mt-3">
						<Plus class=" text-3xl text-gray-500 ml-3" />
						<input
							name="addTask"
							class="bg-transparent w-[100%] text-white m-2 p-3 outline-none form_control"
							placeholder="What you need to do?"
							bind:value={formData}
							style="background-color: transparent;"
						/>
					</div>
					<button class=" bg-green-800 p-2 rounded-md font-bold cursor-pointer mt-4"
						>Add Task</button
					>
					<!-- record of current pending task -->
					<div class=" flex justify-between flex-col">
						{#each todoData as { id, formData }, i (id)}
							<div class=" flex justify-between">
								<p
									class="no-scrollbar overflow-scroll text-white p-2 w-[85%] h-[10vh] text-xl m-4 rounded-lg shadow-lg bg-green-900"
								>
									{formData}
								</p>
								<div class="flex items-center justify-center mr-4">
									<button
										class="bg-green-900 h-[4vh] text-2xl m-2 flex justify-center items-center p-2 rounded-lg"
										on:click={() => handleRemoveTodo(i)}>❌</button
									>
								</div>
							</div>
						{/each}
					</div>
				</form>
			</div>

			<div class=" h-[70vh]">
				<p class=" text-4xl text-center shadow-sm text-yellow-800 font-bold">
					Keep Track Of Your Work
				</p>
				<p class="text-sm text-start ml-[12.5%] mt-2 text-gray-700 font-bold">Be everyday Winner</p>
				<img src="todo.png" class=" p-4" alt="X" width="600px" />
			</div>
		</div>
	</div>
</main>

<style>
	.form_control:active,
	.form_control:focus {
		background: none;
	}
	/* Add this style to make the input background transparent */
	.form_control {
		background: transparent;
	}
</style>
