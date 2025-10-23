import { FlagOverridesType, decrypt } from '@vercel/flags';
import { type NextRequest } from 'next/server';
import { cookies } from 'next/headers';

async function getFlags(request: NextRequest) {
    const overrideCookie = (await cookies()).get('vercel-flag-overrides')?.value;
    const overrides = overrideCookie
        ? await decrypt<FlagOverridesType>(overrideCookie)
        : {};

    const flags = {
        free_shipping: overrides?.free_shipping ?? false,
    };

    return flags;
}