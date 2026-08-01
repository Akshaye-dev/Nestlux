import { firestoreDB } from "@/src/shared/services/firebase/firebase";
import {
    collection,
    getCountFromServer,
    query,
    where,
} from "firebase/firestore";

export async function getPropertyCount(category: string) {
  const propertiesRef = collection(firestoreDB, "properties");

  let q;

  if (category === "all") {
    q = query(propertiesRef);
  } else {
    q = query(propertiesRef, where("category", "==", category));
  }

  const snapshot = await getCountFromServer(q);

  return snapshot.data().count;
}
