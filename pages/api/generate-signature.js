import { Web3sdksSDK } from '@web3sdks/sdk';

const handler = async (req, res) => {
  const { address, amount } = JSON.parse(req.body);

  const sdk = Web3sdksSDK.fromPrivateKey(process.env.PRIVATE_KEY, 'goerli');

  const contract = await sdk.getContract(
    '0xEf582716Cb702948bb8cE259A37e9a1b21Adfd31',
    'signature-drop',
  );

  const price = amount >= 3 ? 0.2 : 0.25;

  try {
    const signedPayload = await contract.signature.generate({
      to: address,
      price,
      quantity: amount,
    });

    return res.status(200).json({
      signedPayload: signedPayload,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      error,
    });
  }
};

export default handler;
