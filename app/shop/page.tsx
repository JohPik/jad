type Props = {
  searchParams?: { [key: string]: string | undefined };
};

const Shop = ({ searchParams }: Props) => {
  return (
    <section className="shop">
      <div className="animation-wrapper">
        <h1 className="underline">Shop</h1>
        {/* <section className='filter-container'>
                <CurrentFilter
                  skinType={this.state.skinType}
                  prodType={this.state.prodType}
                  temp={this.state.temp}
                  handleChangeSkinType={this.handleChangeSkinType}
                  handleChangeProdType={this.handleChangeProdType}
                  handleSubmit={this.handleSubmit}
                  resetFilter={this.resetFilter}
                />
              </section> */}
        <section className="shop-list">
          {/* {this.renderList(this.props.value)} */}
          <i aria-hidden="true"></i>
          <i aria-hidden="true"></i>
          <i aria-hidden="true"></i>
          <i aria-hidden="true"></i>
          <i aria-hidden="true"></i>
        </section>
      </div>
    </section>
  );
};

export default Shop;
