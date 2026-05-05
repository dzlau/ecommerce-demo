import { dedupe, flag } from 'flags/next';
import { vercelAdapter } from '@flags-sdk/vercel';
 

const getCountry = async () => {
    const countries = ['canada','us','germany'];
    const country = countries[Math.floor(Math.random() * countries.length)];
    return country;
};

type Entities = {
   country?: {name:string};
  };
   
const identify = dedupe(async (): Promise<Entities> => {
    const country = await getCountry();
    return {
      country: {name:country}
    };
  });

export const shippingFlag = flag({
  key: 'shipping-flag',
  adapter: vercelAdapter(),
  identify,
});