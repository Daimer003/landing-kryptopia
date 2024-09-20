import crypto from 'crypto';

const url: string = process.env.NEXT_PUBLIC_BASE_API_URL || '';
const version: string = process.env.NEXT_PUBLIC_BASE_API_VERSION || '';

const user: string = process.env.NEXT_PUBLIC_SERVICE_USER || '';
const pass: string = process.env.NEXT_PUBLIC_SERVICE_PASSWORD || '';


export class KryptopiaService {

    static async register(
        name: string,
        last_name: string,
        email: string,
        city: string,
        phone: string) {
        const token = crypto.createHash('sha256').update(pass + user).digest('hex');
        try {
            const response = await fetch(`${url}/api/${version}/register/partners`, {
                method: "POST",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'authorization': `Bearer ${token}`,
                },
                body: JSON.stringify({
                    name: name,
                    last_name: last_name,
                    email: email,
                    city: city,
                    phone: phone,
                })
            })
            const data = await response.json();
            return data;
        } catch (error) {
            console.log(error)
        }
    }

    static async beer(
        name: string,
        business_name: string,
        type: string,
        last_name: string,
        email: string,
        city: string,
    ) {
        const token = crypto.createHash('sha256').update(pass + user).digest('hex');
        try {
            const response = await fetch(`${url}/api/${version}/register/beer`, {
                method: "POST",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'authorization': `Bearer ${token}`,
                },
                body: JSON.stringify({
                    name: name,
                    business_name,
                    type,
                    last_name: last_name,
                    email: email,
                    city: city,
                })
            })
            const data = await response.json();
            return data;
        } catch (error) {
            console.log(error)
        }
    }

    static async commerce(
        name: string,
        business_name: string,
        last_name: string,
        email: string,
        city: string,
    ) {
        const token = crypto.createHash('sha256').update(pass + user).digest('hex');
        try {
            const response = await fetch(`${url}/api/${version}/register/commerces`, {
                method: "POST",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'authorization': `Bearer ${token}`,
                },
                body: JSON.stringify({
                    name: name,
                    business_name,
                    last_name: last_name,
                    email: email,
                    city: city,
                })
            })
            const data = await response.json();
            return data;
        } catch (error) {
            console.log(error)
        }
    }

    static async investor(
        name: string,
        wallet: string,
        amount: number,
        email: string,
        phone: string,
    ) {
        console.log(amount)
        const token = crypto.createHash('sha256').update(pass + user).digest('hex');
        try {
            const response = await fetch(`${url}/api/${version}/register/investor`, {
                method: "POST",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'authorization': `Bearer ${token}`,
                },
                body: JSON.stringify({
                    name: name,
                    wallet: wallet,
                    amount: amount,
                    email: email,
                    phone: phone,

                })
            })
            const data = await response.json();
            return data;
        } catch (error) {
            console.log(error)
        }
    }
}