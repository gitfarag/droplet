import $fetcher from "../../../composables/http"

export default {
    async sendMail (payload) {
        let res = await $fetcher.post('mailer/contact', payload)
        return res.data
    }
}