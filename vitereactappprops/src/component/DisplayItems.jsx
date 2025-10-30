function DisplayItems(items) {
  return (
    <div style={{ display: 'flex' }}>
      <div style={{ display: 'flex', justifyContent: 'center', border: '2px solid black', padding: '10px', margin: '10px', textAlign: 'center', width: '400px', borderRadius: '10px', backgroundColor: 'lightblue', fontFamily: 'Arial, sans-serif' }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'left' }}>
          <div>
            <img src={"https://www.interviewbit.com/blog/wp-content/uploads/2022/01/Javascript-The-Good-Parts.jpg"} alt={items.title} height={200} />
          </div>
          <div >
            <h1>Title : {items.data.title}</h1>
            <h1>Publisher : {items.data.publisher}</h1>
            <h1>Rating : {items.data.rating}</h1>
            <button>Add to Cart</button>
          </div>
        </div>
      </div>
    </div>

  );
}
export default DisplayItems;