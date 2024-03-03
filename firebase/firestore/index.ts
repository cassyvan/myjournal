import admin from "firebase-admin";
import serviceAccount from "./serviceAccountKey.json";

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
