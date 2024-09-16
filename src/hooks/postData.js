import axios from '@/lib/axios'
import { NextResponse } from 'next/server'

export default async function handler() {
    const response = await axios.post('/api/postData')

    return NextResponse.json({response})
}
