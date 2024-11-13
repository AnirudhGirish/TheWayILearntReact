// import React, { useState, useEffect } from 'react'
// import appwriteservice from '../appwrite/config'
// import { Container, PostCard } from '../components'
// function Home() {
//     const [posts, setPosts] = useState([])
//     useEffect(() => {
//         appwriteservice.getPosts().then((posts)=>{
//             if(posts){
//                 setPosts(posts.documents)
//             }
//         })
//     }, [])

//     if (posts.length === 0) {
//         return (
//             <div className="w-full py-52 mt-4 text-center">
//                 <Container>
//                     <div className="flex flex-wrap">
//                         <div className="p-2 w-full">
//                             <h1 className="text-2xl font-bold hover:text-gray-500">
//                                 Login to read posts
//                             </h1>
//                         </div>
//                     </div>
//                 </Container>
//             </div>
//         )
//     }
//   return (
//     <div className='w-full py-8'>
//             <Container>
//                 <div className='flex flex-wrap'>
//                     {posts.map((post) => (
//                         <div key={post.$id} className='p-2 w-1/4'>
//                             <PostCard {...post} />
//                         </div>
//                     ))}
//                 </div>
//             </Container>
//         </div>
//   )
// }

// export default Home
import React, { useState, useEffect } from 'react'
import authService from '../appwrite/auth'
import appwriteservice from '../appwrite/config'
import { Container, PostCard } from '../components'
import { useNavigate } from 'react-router-dom'
import Button from '../components/Button' // Import the Button component

function Home() {
    const [posts, setPosts] = useState([])
    const [loading, setLoading] = useState(true)
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const navigate = useNavigate()

    // Check if user is logged in and fetch posts
    useEffect(() => {
        // Check if the user is logged in
        authService.getCurrentUser()
            .then(user => {
                if (user) {
                    setIsAuthenticated(true)
                    // Fetch posts only if the user is authenticated
                    appwriteservice.getPosts().then((posts) => {
                        if (posts) {
                            setPosts(posts.documents)
                        }
                        setLoading(false)
                    }).catch(error => {
                        console.error("Error fetching posts:", error)
                        setLoading(false)
                    })
                } else {
                    setIsAuthenticated(false)
                    setLoading(false)
                }
            })
            .catch(error => {
                console.error("Error checking user authentication:", error)
                setLoading(false)
            })
    }, [])

    if (loading) {
        return (
            <div className="w-full py-52 mt-4 text-center">
                <Container>
                    <h1>Loading...</h1>
                </Container>
            </div>
        )
    }

    if (!isAuthenticated) {
        return (
            <div className="w-full py-52 mt-4 text-center">
                <Container>
                    <div className="flex flex-wrap">
                        <div className="p-2 w-full">
                            <h1 className="text-2xl font-bold hover:text-gray-500">
                                Login to read posts
                            </h1>
                            {/* Using the Button component to navigate to login */}
                            <Button
                                onClick={() => navigate('/login')}
                                className="w-40 m-6"
                            >Go to Login</Button>
                        </div>
                    </div>
                </Container>
            </div>
        )
    }

    return (
        <div className='w-full py-8'>
            <Container>
                <div className='flex flex-wrap'>
                    {posts.map((post) => (
                        <div key={post.$id} className='p-2 w-1/4'>
                            <PostCard {...post} />
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    )
}

export default Home
