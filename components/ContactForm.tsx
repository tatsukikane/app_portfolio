export default function ContactForm() {
  return (
    <section id="contact" className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:py-20">
      <div className="rounded-2xl bg-white/60 backdrop-blur-sm shadow-xl lg:rounded-3xl">
        <div className="px-4 py-6 lg:px-8 lg:py-8">
          <h2 className="mb-2 text-2xl font-bold text-gray-900 lg:mb-4 lg:text-4xl">
            お問い合わせ
          </h2>
          <p className="mb-6 text-sm text-gray-600 lg:mb-8 lg:text-base">
            ご質問やご意見がございましたら、お気軽にお問い合わせください。
          </p>

          <div className="overflow-hidden rounded-xl lg:rounded-2xl">
            <iframe
              src="https://docs.google.com/forms/d/e/1FAIpQLSdRYROTJhwVHeo_wogdpmwiEtHJPfdtrEp6fmvK0sEAaGaW3A/viewform?embedded=true"
              width="100%"
              height="689"
              frameBorder="0"
              marginHeight={0}
              marginWidth={0}
              className="w-full"
            >
              読み込んでいます…
            </iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
