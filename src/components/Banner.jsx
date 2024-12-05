/**
 * Author: Alex Edgar
 * Written: 02/12/25
 */

const Banner = () => {
    return (
        <div className="text-center py-16 bg-gradient-to-r from-blue-500 to-teal-500 text-white">
            <h1 className="text-4xl font-extrabold mb-4">Phishr: Email Phishing Detector</h1>
            <p className="text-xl">Upload an email screenshot or paste email text to check if it's a phishing attempt.</p>
        </div>
    )
}

export default Banner;