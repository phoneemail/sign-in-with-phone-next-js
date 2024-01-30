import { NextResponse } from "next/server";
import type { NextRequest } from 'next/server';
import jwt, { JwtPayload, Secret } from 'jsonwebtoken';

/**
 * GET Request Handler
 * Handles GET requests to extract and verify a token from the URL parameters.
 */
export async function GET(request: NextRequest) {
    try {
        // Extract token from URL parameters
        const url = new URL(request.url);
        const token: string = url.searchParams.get('phtoken') || '';

        // Use API_KEY from environment variables as the secret key
        const secret: Secret = process.env.API_KEY || '';

        // Verify the token using jsonwebtoken
        const decoded = jwt.verify(token, secret) as JwtPayload;

        // Respond with success message including decoded information
        return NextResponse.json({ status: 'success', message: `${decoded.country_code}${decoded.phone_no}` });
    } catch (error: any) {
        // Handle invalid or expired tokens
        return NextResponse.json({ status: 'failure', error: 'Unauthorized: Invalid token' });
    }
}

/**
 * POST Request Handler
 * Handles POST requests to extract and verify a token from the request body.
 */
export async function POST(request: NextRequest) {
    try {
        // Extract token from request body
        const { phtoken }: { phtoken?: string } = await request.json();

        // Use API_KEY from environment variables as the secret key
        const secret: Secret = process.env.API_KEY || '';

        // Verify the token using jsonwebtoken
        const decoded = jwt.verify(phtoken || '', secret) as JwtPayload;

        // Respond with success message including decoded information
        return NextResponse.json({ status: 'success', message: `${decoded.country_code}${decoded.phone_no}` });
    } catch (error: any) {
        // Handle invalid or expired tokens
        return NextResponse.json({ status: 'failure', error: 'Unauthorized: Invalid token' });
    }
}
