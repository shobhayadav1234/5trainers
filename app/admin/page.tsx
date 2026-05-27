export default function DashboardPage() {
    return (
        /* Yahan humne 'w-full flex-1 mx-auto' lagaya hai.
          Isse content sidebar ke exact khatam hote hi shuru hoga aur screen ke aakhiri right corner tak stretch ho jayega.
        */
        <div className="w-full flex-1 bg-gray-50 min-h-screen p-6 md:p-10 overflow-y-auto box-border ml-40">

            {/* Top Header / Welcome Banner - max-w-7xl hata kar full width kiya */}
            <div className="w-full bg-white rounded-2xl shadow-sm p-6 border border-gray-100 flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
                <div>
                    <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight">
                        Dashboard
                    </h1>
                    <p className="text-gray-500 mt-1 text-sm">
                        Welcome back! Here's what's happening at Mindweave Academy today.
                    </p>
                </div>
                {/* Live Status Tag */}
                <div className="flex items-center gap-2 self-start md:self-auto bg-emerald-50 text-emerald-700 px-3 py-1.5 rounded-full text-xs font-semibold border border-emerald-200">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                    System Live
                </div>
            </div>

            {/* Stats Cards Grid - Iski width ko stretch karne ke liye w-full aur gap-6 set kiya */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8 w-full">
                {/* Card 1 */}
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition duration-200 w-full">
                    <h2 className="text-gray-400 font-semibold text-xs uppercase tracking-wider">
                        Total Courses
                    </h2>
                    <div className="flex items-baseline gap-2 mt-2">
                        <span className="text-3xl font-bold text-gray-800">25</span>
                        <span className="text-xs font-medium text-emerald-600">+2 new</span>
                    </div>
                </div>

                {/* Card 2 */}
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition duration-200 w-full">
                    <h2 className="text-gray-400 font-semibold text-xs uppercase tracking-wider">
                        Active Students
                    </h2>
                    <div className="flex items-baseline gap-2 mt-2">
                        <span className="text-3xl font-bold text-gray-800">1,200</span>
                        <span className="text-xs font-medium text-emerald-600">+12% this week</span>
                    </div>
                </div>

                {/* Card 3 */}
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition duration-200 w-full">
                    <h2 className="text-gray-400 font-semibold text-xs uppercase tracking-wider">
                        Placements
                    </h2>
                    <div className="flex items-baseline gap-2 mt-2">
                        <span className="text-3xl font-bold text-gray-800">320</span>
                        <span className="text-xs font-medium text-blue-600">85% rate</span>
                    </div>
                </div>

                {/* Card 4 */}
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition duration-200 w-full">
                    <h2 className="text-gray-400 font-semibold text-xs uppercase tracking-wider">
                        Expert Trainers
                    </h2>
                    <div className="flex items-baseline gap-2 mt-2">
                        <span className="text-3xl font-bold text-gray-800">15</span>
                        <span className="text-xs font-medium text-gray-500">Fully active</span>
                    </div>
                </div>
            </div>

            {/* Lower Section: Recent Activity & Quick Actions - Full width span layout */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 w-full">

                {/* Recent Registrations Table */}
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 lg:col-span-2 w-full">
                    <div className="flex justify-between items-center mb-6">
                        <h3 className="text-lg font-bold text-gray-800">Recent Registrations</h3>
                        <button className="text-xs font-semibold text-teal-600 hover:text-teal-700 hover:underline">View All</button>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="border-b border-gray-100 text-gray-400 text-xs uppercase font-semibold">
                                    <th className="pb-3 px-2">Student</th>
                                    <th className="pb-3 px-2">Course</th>
                                    <th className="pb-3 px-2">Status</th>
                                </tr>
                            </thead>
                            <tbody className="text-sm text-gray-600 divide-y divide-gray-50">
                                <tr>
                                    <td className="py-3.5 px-2 font-medium text-gray-800">Aman Sharma</td>
                                    <td className="py-3.5 px-2">Full Stack Web Dev</td>
                                    <td className="py-3.5 px-2"><span className="bg-green-50 text-green-700 text-xs px-2.5 py-1 rounded-full font-medium">Active</span></td>
                                </tr>
                                <tr>
                                    <td className="py-3.5 px-2 font-medium text-gray-800">Priya Patel</td>
                                    <td className="py-3.5 px-2">UI/UX Design Masterclass</td>
                                    <td className="py-3.5 px-2"><span className="bg-green-50 text-green-700 text-xs px-2.5 py-1 rounded-full font-medium">Active</span></td>
                                </tr>
                                <tr>
                                    <td className="py-3.5 px-2 font-medium text-gray-800">Rahul Verma</td>
                                    <td className="py-3.5 px-2">Data Science Bootcamp</td>
                                    <td className="py-3.5 px-2"><span className="bg-amber-50 text-amber-700 text-xs px-2.5 py-1 rounded-full font-medium">Pending</span></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Quick Management Actions */}
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col justify-between w-full">
                    <div>
                        <h3 className="text-lg font-bold text-gray-800 mb-6">Quick Actions</h3>
                        <div className="flex flex-col gap-3">
                            <button className="w-full text-left bg-gray-50 hover:bg-gray-100 text-gray-700 font-medium text-sm py-3 px-4 rounded-xl transition duration-150">
                                + Add New Course
                            </button>
                            <button className="w-full text-left bg-gray-50 hover:bg-gray-100 text-gray-700 font-medium text-sm py-3 px-4 rounded-xl transition duration-150">
                                + Register New Student
                            </button>
                            <button className="w-full text-left bg-gray-50 hover:bg-gray-100 text-gray-700 font-medium text-sm py-3 px-4 rounded-xl transition duration-150">
                                Update Placement Record
                            </button>
                        </div>
                    </div>
                    <div className="text-xs text-gray-400 mt-6 pt-4 border-t border-gray-50 text-center">
                        Mindweave Admin v2.0.6
                    </div>
                </div>

            </div>

        </div>
    );
}