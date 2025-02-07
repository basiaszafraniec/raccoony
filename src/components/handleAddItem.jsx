const [isAdding, setIsAdding] = useState(false);
const [newItemTitle, setNewItemTitle] = useState('');
const [newItemImg, setNewItemImg] = useState('');
const [newItemCaption, setNewItemCaption] = useState('');

// This function will handle the saving of the new item
const handleAddItem = () => {
  if (newItemTitle && newItemImg && newItemCaption) {
    const newItem = {
      title: newItemTitle,
      img: newItemImg,
      caption: newItemCaption,
    };

    // Get existing items from localStorage or initialize an empty array
    const currentCollection = JSON.parse(localStorage.getItem('collection')) || [];
    currentCollection.push(newItem);

    // Save updated collection to localStorage
    localStorage.setItem('collection', JSON.stringify(currentCollection));

    // Update the collection
    setIsAdding(false);
  }
};

// Close the popup
const handleClosePopup = () => setIsAdding(false);
