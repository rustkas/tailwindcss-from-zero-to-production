import React from "react";

export default function App() {
	return (
	  <div>
      <div className="bg-gray-100 grid lg:grid-cols-2 2xl:grid-cols-5">
        <div className="px-8 py-12 max-w-md mx-auto sm:max-w-xl lg:px-12 lg:py-24 lg:max-w-full xl:mr-0 2xl:col-span-2">
          <div className="xl:max-w-xl">
            <img className="h-10" src="/img/logo.svg" alt="Workcation" />
            <img
              className="mt-6 rounded-lg shadow-xl sm:mt-8 sm:h-64 sm:w-full sm:object-cover object-center lg:hidden"
              src="/img/beach-work.jpg"
              alt="Woman workcationing on the beach"
            />
            <h1 className="mt-6 text-2xl font-bold text-gray-900 sm:mt-8 sm:text-4xl lg:text-3xl xl:text-4xl">
              You can work from anywhere.
              <br className="hidden lg:inline" /> <span className="text-indigo-500">Take advantage of it.</span>
            </h1>
            <p className="mt-2 text-gray-600 sm:mt-4 sm:text-xl">
              Workcation helps you find work-friendly rentals in beautiful locations so you can enjoy some nice weather even when you're not
              on vacation.
            </p>
            <div className="mt-4 space-x-1 sm:mt-6">
              <a
                className="inline-block px-5 py-3 rounded-lg transform transition bg-indigo-500 hover:bg-indigo-400 hover:-translate-y-0.5 focus:ring-indigo-500 focus:ring-opacity-50 focus:outline-none focus:ring focus:ring-offset-2 active:bg-indigo-600 uppercase tracking-wider font-semibold text-sm text-white shadow-lg sm:text-base"
                href="#"
              >
                Book your escape
              </a>
            </div>
          </div>
        </div>
        <div className="hidden relative lg:block 2xl:col-span-3">
          <img
            className="absolute inset-0 w-full h-full object-cover object-center"
            src="/img/beach-work.jpg"
            alt="Woman workcationing on the beach"
          />
        </div>
      </div>
	
	  <div className="max-w-md sm:max-w-xl lg:max-w-6xl mx-auto px-8 lg:px-12 py-8">
			<h2 className="text-xl text-gray-900">Popular destinations</h2>
			<p className="mt-2 text-gray-600">A selection of great work-friendly cities with lots to see and explore.</p>
			<div className="mt-6 grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
				
				<div className="flex items-center rounded-lg bg-white shadow-lg overflow-hidden">
					<img className="h-32 w-32 flex-shrink-0" src="/img/toronto.jpg" alt="Toronto skyline" />
					<div className="px-6 py-4">
						<h3 className="text-lg font-semibold text-gray-800">Toronto</h3>
						
						<p className="text-gray-600">$120 / night average</p>
						<div className="mt-4">
							<a href="#" className="text-indigo-500 hover:text-indigo-400 font-semibold text-sm">
							Explore 76 properties
							</a>
						</div>
					</div>
				</div>

				<div className="flex items-center rounded-lg bg-white shadow-lg overflow-hidden">
					<img className="h-32 w-32 flex-shrink-0" src="/img/malibu.jpg" alt="Cliff in Malibu" />
					<div className="px-6 py-4">
						<h3 className="text-lg font-semibold text-gray-800">Malibu</h3>
						
						<p className="text-gray-600">$215 / night average</p>
						<div className="mt-4">
							<a href="#" className="text-indigo-500 hover:text-indigo-400 font-semibold text-sm">
							Explore 43 properties
							</a>
						</div>
					</div>
				</div>				

				<div className="flex items-center rounded-lg bg-white shadow-lg overflow-hidden">
					<img className="h-32 w-32 flex-shrink-0" src="/img/chicago.jpg" alt="Chicago skyline" />
					<div className="px-6 py-4">
						<h3 className="text-lg font-semibold text-gray-800">Chicago</h3>
						
						<p className="text-gray-600">$130 / night average</p>
						<div className="mt-4">
							<a href="#" className="text-indigo-500 hover:text-indigo-400 font-semibold text-sm">
							Explore 115 properties
							</a>
						</div>
					</div>
				</div>

				<div className="flex items-center rounded-lg bg-white shadow-lg overflow-hidden">
					<img className="h-32 w-32 flex-shrink-0" src="/img/seattle.jpg" alt="Seattle skyline" />
					<div className="px-6 py-4">
						<h3 className="text-lg font-semibold text-gray-800">Seattle</h3>
						
						<p className="text-gray-600">$135 / night average</p>
						<div className="mt-4">
							<a href="#" className="text-indigo-500 hover:text-indigo-400 font-semibold text-sm">
							Explore 63 properties
							</a>
						</div>
					</div>
				</div>

				<div className="flex items-center rounded-lg bg-white shadow-lg overflow-hidden">
					<img className="h-32 w-32 flex-shrink-0" src="/img/colorado.jpg" alt="Lake in Colorado" />
					<div className="px-6 py-4">
						<h3 className="text-lg font-semibold text-gray-800">Colorado</h3>
						
						<p className="text-gray-600">$85 / night average</p>
						<div className="mt-4">
							<a href="#" className="text-indigo-500 hover:text-indigo-400 font-semibold text-sm">
							Explore 47 properties
							</a>
						</div>
					</div>
				</div>

				<div className="flex items-center rounded-lg bg-white shadow-lg overflow-hidden">
					<img className="h-32 w-32 flex-shrink-0" src="/img/miami.jpg" alt="Beach in Miami" />
					<div className="px-6 py-4">
						<h3 className="text-lg font-semibold text-gray-800">Miami</h3>
						
						<p className="text-gray-600">$115 / night average</p>
						<div className="mt-4">
							<a href="#" className="text-indigo-500 hover:text-indigo-400 font-semibold text-sm">
							Explore 86 properties
							</a>
						</div>
					</div>
				</div>
				
			</div>
		</div>	
	
      </div>
	);
}