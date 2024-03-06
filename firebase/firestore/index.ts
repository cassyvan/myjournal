import admin from "firebase-admin";

const serviceAccount = JSON.parse(
  process.env.FIREBASE_SERVICE_ACCOUNT_KEY as string
);

if (!admin.apps.length) {
  try {
    admin.initializeApp({
      credential: admin.credential.cert(
        JSON.parse(JSON.stringify(serviceAccount))
      ),
    });
  } catch (error) {
    if (error instanceof Error) {
      console.log("Firebase admin initialization error", error.stack);
    }
  }
}
export default admin.firestore();
