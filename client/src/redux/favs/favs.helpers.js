import { firestore } from '../../firebase/utils';

export const handlePostFav = (fav) => {
  return new Promise((resolve, reject) => {
    firestore
      .collection('favs')
      .doc()
      .set(fav)
      .then(() => resolve())
      .catch((err) => reject(err));
  });
};

export const handleDeleteFav = ({ fav, uid }) => {
  return new Promise((resolve, reject) => {
    firestore
      .collection('favs')
      .where('strDrink', '==', fav.strDrink)
      .where('userID', '==', uid)
      .get()
      .then((snapshot) => {
        snapshot.docs.map((doc) => {
          firestore.collection('favs').doc(doc.id).delete();
        });
        resolve();
      })
      .catch((err) => reject(err));
  });
};

export const handleGetFavs = (uid) => {
  return new Promise((resolve, reject) => {
    let ref = firestore.collection('favs');

    ref = ref.where('userID', '==', uid);

    ref
      .get()
      .then((snapshot) => {
        const data = [
          ...snapshot.docs.map((doc) => {
            return { ...doc.data() };
          }),
        ];
        resolve({ data });
      })
      .catch((err) => reject(err));
  });
};
