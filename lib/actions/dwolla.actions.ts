// "use server";

// import { Client } from "dwolla-v2";

// const getEnvironment = (): "production" | "sandbox" => {
//   const environment = process.env.DWOLLA_ENV;

//   if (environment === "sandbox" || environment === "production") {
//     return environment;
//   }

//   throw new Error(
//     "Dwolla environment should either be set to `sandbox` or `production`"
//   );
// };

// const dwollaClient = new Client({
//   environment: getEnvironment(),
//   key: process.env.DWOLLA_KEY as string,
//   secret: process.env.DWOLLA_SECRET as string,
// });

// // Create a Dwolla Funding Source using a Plaid Processor Token
// export const createFundingSource = async ({
//   customerId,
//   fundingSourceName,
//   plaidToken,
// }: {
//   customerId: string;
//   fundingSourceName: string;
//   plaidToken: string;
// }) => {
//   try {
//     const response = await dwollaClient.post(
//       `customers/${customerId}/funding-sources`,
//       {
//         name: fundingSourceName,
//         plaidToken,
//       }
//     );
//     return response.headers.get("location");
//   } catch (err) {
//     console.error("Creating a Funding Source Failed: ", err);
//     throw err;
//   }
// };

// export const createOnDemandAuthorization = async () => {
//   try {
//     const response = await dwollaClient.post("on-demand-authorizations");
//     return response.body._links;
//   } catch (err) {
//     console.error("Creating an On Demand Authorization Failed: ", err);
//     throw err;
//   }
// };

// export const createDwollaCustomer = async ({
//   firstName,
//   lastName,
//   email,
//   type,
//   address1,
//   city,
//   state,
//   postalCode,
//   dateOfBirth,
//   ssn,
// }: {
//   firstName: string;
//   lastName: string;
//   email: string;
//   type: string;
//   address1: string;
//   city: string;
//   state: string;
//   postalCode: string;
//   dateOfBirth: string;
//   ssn: string;
// }) => {
//   try {
//     const newCustomer = {
//       firstName,
//       lastName,
//       email,
//       type,
//       address1,
//       city,
//       state,
//       postalCode,
//       dateOfBirth,
//       ssn,
//     };
//     const response = await dwollaClient.post("customers", newCustomer);
//     return response.headers.get("location");
//   } catch (err) {
//     console.error("Creating a Dwolla Customer Failed: ", err);
//     throw err;
//   }
// };

// export const createTransfer = async ({
//   sourceFundingSourceUrl,
//   destinationFundingSourceUrl,
//   amount,
// }: {
//   sourceFundingSourceUrl: string;
//   destinationFundingSourceUrl: string;
//   amount: number;
// }) => {
//   try {
//     const requestBody = {
//       _links: {
//         source: {
//           href: sourceFundingSourceUrl,
//         },
//         destination: {
//           href: destinationFundingSourceUrl,
//         },
//       },
//       amount: {
//         currency: "USD",
//         value: amount,
//       },
//     };
//     const response = await dwollaClient.post("transfers", requestBody);
//     return response.headers.get("location");
//   } catch (err) {
//     console.error("Transfer fund failed: ", err);
//     throw err;
//   }
// };

// export const addFundingSource = async ({
//   dwollaCustomerId,
//   processorToken,
//   bankName,
// }: {
//   dwollaCustomerId: string;
//   processorToken: string;
//   bankName: string;
// }) => {
//   try {
//     const onDemandAuthorization = await createOnDemandAuthorization();
//     const fundingSourceOptions = {
//       customerId: dwollaCustomerId,
//       fundingSourceName: bankName,
//       plaidToken: processorToken,
//       _links: onDemandAuthorization,
//     };
//     return await createFundingSource(fundingSourceOptions);
//   } catch (err) {
//     console.error("Transfer fund failed: ", err);
//     throw err;
//   }
// };

