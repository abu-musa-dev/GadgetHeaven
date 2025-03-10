import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <section className="flex items-center h-screen p-16 dark:bg-gray-50 dark:text-gray-800">
	<div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
            <Helmet>
                <title>404 - Page Not Found</title> 
            </Helmet>
            <div className="text-center">
                <h1 className="text-9xl font-extrabold text-red-500 mb-4">404</h1>
                <h2 className="text-4xl font-semibold mb-2">Page Not Found</h2>
                <p className="text-lg text-gray-700 mb-6">Sorry, the page you are looking for does not exist.</p>
            </div>
        </div>
</section>
  )
}
