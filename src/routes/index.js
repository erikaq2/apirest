import { Router } from 'express'
const router = Router()

router.get('/', (req, res) => res.render('index', { title: 'VETERINARIO CAT LOVER'}))

router.get('/about', (req, res) => res.render('about', {title: 'about me'}))

router.get('/contact', (req, res) => res.render('contact', {title: 'conctat page'}))

router.get('/vision', (req, res) => res.render('vision', {title: 'vision'}))

router.get('/servicios', (req, res) => res.render('servicios', {title: 'servicios'}))

router.get('/peluqueria', (req, res) => res.render('peluqueria', {title: 'grooming'}))

router.get('/hospitalizacion', (req, res) => res.render('hospitalizacion', {title: 'hospitalizacion'}))

router.get('/medicamentos', (req, res) => res.render('medicamentos', {title: 'medicamentos'}))


export default router 
