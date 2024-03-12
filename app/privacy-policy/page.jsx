// "client-only";
import Head from 'next/head'
import React from 'react'


const page = () => {
    return (
        <div style={{margin: 40,}}>
            <Head>
                <title>Privacy Policy</title>
                <meta name="description" content="Privacy policy for your app on Google Play Console" />
                {/* Add any other meta tags for SEO and social sharing */}
            </Head>
            <div className="container">
                <h1>Privacy Policy for Google Play Console</h1>
                <p>Last Updated: [Date]</p>

                <h2>1. Introduction</h2>
                <p>Welcome to our Privacy Policy. Your privacy is critically important to us. This policy explains the types of information we collect from users of our services and how we use, share, and protect that information. By using our services, you agree to the collection and use of information in accordance with this policy.</p>

                <h2>2. Information We Collect</h2>
                <p>We collect various types of information for various purposes to provide and improve our services to you. Types of information we may collect include:</p>
                <ul>
                    <li>Personal Information: We may collect personally identifiable information such as your name, email address, phone number, and other contact details.</li>
                    <li>Usage Data: We may collect information about how you access and use our services, including information such as your device's Internet Protocol address, browser type, browser version, the pages of our service that you visit, the time and date of your visit, and other diagnostic data.</li>
                    <li>Device Information: We may collect information about the device you use to access our services, including the device type, unique device identifiers, operating system version, and mobile network information.</li>
                </ul>

                <h2>3. How We Use Your Information</h2>
                <p>We use the collected information for various purposes, including:</p>
                <ul>
                    <li>To provide and maintain our services.</li>
                    <li>To notify you about changes to our services.</li>
                    <li>To allow you to participate in interactive features of our services when you choose to do so.</li>
                    <li>To provide customer support.</li>
                    <li>To gather analysis or valuable information so that we can improve our services.</li>
                    <li>To monitor the usage of our services.</li>
                    <li>To detect, prevent, and address technical issues.</li>
                </ul>

                <h2>4. How We Share Your Information</h2>
                <p>We may share your information with third-party service providers who perform services on our behalf or assist us in providing our services, as well as with affiliates, business partners, and other third parties for business purposes or as required by law.</p>

                <h2>5. Security of Your Information</h2>
                <p>We take reasonable precautions to protect your information from unauthorized access, use, or disclosure. However, no method of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee absolute security.</p>

                <h2>6. Children's Privacy</h2>
                <p>Our services are not directed to children under the age of 13, and we do not knowingly collect personal information from children. If you are a parent or guardian and believe that your child has provided us with personal information, please contact us so that we can delete the information.</p>

                <h2>7. Changes to This Privacy Policy</h2>
                <p>We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page. You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.</p>

                <h2>8. Contact Us</h2>
                <p>If you have any questions or concerns about our Privacy Policy, please contact us:</p>
                <ul>
                    <li>By email: [Your Email Address]</li>
                    <li>By visiting this page on our website: [Your Website URL]</li>
                    <li>By mail: [Your Mailing Address]</li>
                </ul>
            </div>
            {/* <style jsx>{`
                .container {
                    max-width: 800px;
                    margin: 0 auto;
                    padding: 20px;
                }
                h1, h2, h3, h4, h5, h6 {
                    margin-bottom: 10px;
                }
                p {
                    margin-bottom: 20px;
                }
            `}</style> */}
        </div>
    )
}

export default page