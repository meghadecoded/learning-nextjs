// // Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// import type { NextApiRequest, NextApiResponse } from 'next'

// type Data = {
//   name: string
// }

// export default function handler(
//   req: NextApiRequest,
//   res: NextApiResponse<Data>
// ) {
//   res.status(200).json({ name: 'John Doe' })
// }

import type { NextApiRequest, NextApiResponse } from 'next'


export default function handler(
  req: NextApiRequest, res: NextApiResponse
) {
  if (req.method != 'GET') {
    return res.status(405).json({ message: 'This endpoint is for GET request' })
  }
  const contactId = req.query.contactid
  if (!contactId) {
    return res.status(400).json({ message: 'Please provide a contact ID' })
  }
  return res.status(200).json({ name: 'John Doe' })
}