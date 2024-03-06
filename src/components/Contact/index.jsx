function Contact() {
    return (
        <section id="get-in-touch" className="mt-12 mb-10 xl:mt-20 xl:mb-14">
            <div className="text-center text-3xl xl:text-4xl font-extrabold tracking-wide">Get in touch</div>
            <div className="font-base text-center mt-7 tracking-wide xl:mt-14 xl:text-lg">{`I'm always excited to talk about anything frontend and work on some exciting projects. Have a question? message me and let's discuss it over a coffee.`}</div>
            <div className="text-center">
                <div className="inline-block text-center mt-4 tracking-wide xl:text-lg xl:mt-10 hover:scale-[1.05] transition-transform"><a href={`mailto:gopal.chitkara@gmail.com`} >Send me an email at <span className="border-b-4 border-blue-400">{`gopal.chitkara@gmail.com`}</span></a></div>
            </div>
        </section>
    );
}
export default Contact;
