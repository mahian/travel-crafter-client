import Head from 'next/head'
import NavBar from '@/components/shared/NavBar'
import Footer from '@/components/shared/Footer'
import PageHeader from '@/components/utility/PageHeader'


export default function Terms() {
    return (
        <>
            <Head>
                <title>Contact us</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.3.0/css/all.min.css" integrity="sha512-SzlrxWUlpfuzQ+pcUCosxcglQRNAq/DZjVsC0lE40xsADsfeQoEypE+enwcOiGjk/bSuGGKHEyjSoQ1zVisanQ==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
                <link
                    rel="stylesheet"
                    href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.6.0/css/bootstrap.min.css"
                />
                <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
                <script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.6.0/js/bootstrap.min.js"></script>
            </Head>
            <main>
                <NavBar />
                <div className="container" id='contact-us'>
                    <PageHeader>Terms and condition</PageHeader>
                    <div>
                        <p>
                            We respect your privacy and recognize the need to protect the personally identifiable information (any information by which you can be identified, such as name, address, and telephone number) you share with us. We would like to assure you that we follow appropriate standards when it comes to protecting your privacy on our website.
                        </p>
                        <p>Some of our web pages use "cookies" so that we can better serve you with customized information when you return to our site. Cookies are identifiers which web sites send to the browser on your computer to facilitate your next visit to our site. You can set your browser to notify you when you are sent a cookie, giving you the option to decide whether or not to accept it. The information we collect and analyze is used to improve our service to you.</p>
                        <p>With specific reference to third party advertising, we use third-party service providers to serve ads on our behalf across the Internet and sometimes on this site. They may collect anonymous information about your visits to our website, and your interaction with our products and services. They may also use information about your visits to this and other websites to target advertisements for goods and services. This anonymous information is collected through the use of a 'pixel tag', which is industry standard technology used by most major websites. No personally identifiable information is collected or used in this process. Such third parties do not know your name, phone number, address, email address, or any personally identifying information. If you would like more information about this practice and to know your choices about not having this anonymous information used by our third party service provider, with specific reference to booking/e-commerce transactions, TravelCrafter collects the following personal sensitive information from you while transacting through TravelCrafter, this includes your Name and Sex, Phone Number, Billing Address, Credit Card details and Date of birth in case of a child.</p>
                        <p>TravelCrafter does not sell or trade upon any of the above foregoing information without the consent of the user or customer.</p>
                        <p>The foregoing information collected from the users/customers/travelers is put to the following use:</p>
                        <p>Customer name, address, phone number, traveller's name and age are shared with applicable service providers like the airlines, hotels, etc., for the purpose of reservation and booking the services for the customer/traveller. Information like Credit Card Details and Net Banking Details are usually collected directly by the payment gateways and banks and not by TravelCrafter, but if ever stored or retained by us, the data will be stored internally, secured and is never shared, except that they may be shared with third party private/government security agencies to screen for fraudulent activities. These details are also shared with certain third parties only for the purpose of processing 'Cash Back & Discounts'. Information like Phone number, E-mail address and billing address may be used for promotional purposes, unless the customer/user has unsubscribed from such services.</p>
                        <p>Customer name, address, phone number, traveller's name and age are shared with applicable service providers like the airlines, hotels, etc., for the purpose of reservation and booking the services for the customer/traveller. Information like Credit Card Details and Net Banking Details are usually collected directly by the payment gateways and banks and not by TravelCrafter, but if ever stored or retained by us, the data will be stored internally, secured and is never shared, except that they may be shared with third party private/government security agencies to screen for fraudulent activities. These details are also shared with certain third parties only for the purpose of processing 'Cash Back & Discounts'. Information like Phone number, E-mail address and billing address may be used for promotional purposes, unless the customer/user has unsubscribed from such services.</p>
                        <p>
                            TravelCrafter takes appropriate steps to protect the information you share with us. We have implemented technology and security features and strict policy guidelines to safeguard the privacy of your personally identifiable information from unauthorized access and improper use or disclosure. Please contact us on info@TravelCrafter.com to obtain names and addresses of the specific entities that shall have access to your personal information in a given transaction.
                            TravelCrafter will continue to enhance its security procedures as new technology becomes available, and ensures that its security procedures are compliant with current applicable regulations. If our privacy policy changes in the future, it will be posted here and a new effective date will be shown. You should access our privacy policy regularly to ensure you understand our current policies.
                        </p>
                    </div>
                </div>
                <Footer />
            </main>
        </>
    )
}