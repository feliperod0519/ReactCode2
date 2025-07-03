function Card({headerContent, bodyContent, footerContent}){
    return (
        <div style={{ border: '1px solid #ccc', padding: '10px', margin: '10px' }}>
            <div style={{ borderBottom: '1px solid #eee', paddingBottom: '5px', marginBottom: '5px' }}>
                {headerContent}
            </div>
            <div>
                {bodyContent}
            </div>
            <div style={{ borderTop: '1px solid #eee', paddingTop: '5px', marginTop: '5px' }}>
                {footerContent}
            </div>
        </div>
  );
}

export default Card;