import React from 'react'

function Card({data, name, post="Staff", sizedata=0}) {//can write props or do this method
    return (
        <div>
            <figure className="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
                <img className="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" src="https://images.pexels.com/photos/29157383/pexels-photo-29157383/free-photo-of-iconic-chicago-skyline-with-historic-architecture.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" width="384" height="512" />
                <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
                    <blockquote>
                        <p className="text-lg font-medium">
                            {data || "Tailwind is the best framework or compontent library of CSS and React is the best library for JS "}
                        </p>
                    </blockquote>
                    <figcaption className="font-medium">
                        <div className="text-sky-500 dark:text-sky-400">
                            {name || "User"}
                        </div>
                        <div className="text-slate-700 dark:text-slate-500">
                            {post} @ Kraftig {sizedata}
                        </div>
                    </figcaption>
                </div>
            </figure>
        </div>
    )
}

export default Card
