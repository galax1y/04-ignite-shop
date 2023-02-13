import {NextApiRequest, NextApiResponse} from 'next'
import {stripe} from '../../lib/stripe'

// código server side, > não é pra causar problemas de segurança <
export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse,
) {
	console.log('checkout route received', req.body)
	const {lineItems} = req.body
	console.log('priceIds:', lineItems)

	if (req.method !== 'POST') {
		return res.status(405).json({message: 'Method not allowed'})
	}

	if (!lineItems) {
		return res.status(400).json({message: 'lineItems not found'})
	}

	const successUrl = `${process.env.NEXT_URL}/success?session_id={CHECKOUT_SESSION_ID}`
	const cancelUrl = `${process.env.NEXT_URL}/`

	const checkoutSession = await stripe.checkout.sessions.create({
		mode: 'payment',
		line_items: [...lineItems],
		success_url: successUrl,
		cancel_url: cancelUrl,
	})

	return res.status(201).json({
		checkoutUrl: checkoutSession.url,
	})
}
