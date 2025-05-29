function PracTalwind() {
	return (
		<>
			<main class="p-5">
				<h1 class="text-center text-lg text-green-400">Hello World</h1>
				<div class="my-4 h-10 w-full rounded-md border-2 border-violet-600 bg-violet-200 p-2">
					<p class="text-center font-mono text-[16px] font-extrabold">
						This is div
					</p>
				</div>

				<div class="fixed top-0 h-10 w-10 bg-red-400"></div>
				<div class="flex justify-between">
					<div class="h-16 w-16 rounded-full bg-amber-400"></div>
					<div class="h-16 w-16 rounded-full bg-amber-400"></div>
					<div class="h-16 w-16 rounded-full bg-amber-400"></div>
					<div class="h-16 w-16 rounded-full bg-amber-400"></div>
				</div>

				<div class="grid grid-cols-3 gap-2">
					<div class="mt-10 h-10 bg-red-400"></div>
					<div class="mt-10 h-10 bg-red-400"></div>
					<div class="mt-10 h-10 bg-red-400"></div>
				</div>

				<div class="hidden md:block">
					<p>I will appear at width g 768px</p>
				</div>

				<div class="hidden max-md:block">
					<p>I will appear at width s 768px</p>
				</div>

				<button class="mt-5 cursor-pointer rounded-lg bg-green-500 px-10 py-2 text-white hover:bg-green-700 focus:ring-4 focus:ring-green-200 focus:outline-none">
					click me!
				</button>

				<ul class="my-5 space-y-1">
					<li class="bg-amber-50 p-2 first:bg-amber-200">Item</li>
					<li class="bg-amber-50 p-2 first:bg-amber-200 odd:bg-red-500 even:bg-blue-500">
						Item
					</li>
					<li class="bg-amber-50 p-2 first:bg-amber-200 odd:bg-red-500 even:bg-blue-500">
						Item
					</li>
					<li class="bg-amber-50 p-2 first:bg-amber-200 odd:bg-red-500 even:bg-blue-500">
						Item
					</li>
					<li class="bg-amber-50 p-2 first:bg-amber-200 odd:bg-red-500 even:bg-blue-500">
						Item
					</li>
				</ul>
			</main>
		</>
	);
}

export default PracTalwind;
