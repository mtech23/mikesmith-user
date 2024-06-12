  {/* <div className="col-lg-5 col-md-6">
                <div
                  className="platinum-package"
                  data-aos="fade-left"
                  data-aos-anchor-placement="center-bottom"
                  data-aos-duration="3000"
                >
                  <p>+ Awesome Money!</p>
                  <p>+ 10 Posts/Month</p>
                  <p>+ 20 Messages Per Month</p>
                  <p>+ Keep 80% of Sales</p>
                  <p>+ Keep 100% of Tips</p>
                  <p>+ Earn 2% in Platinum Points on Sales</p>
                  <p>- Can Only View Requests</p>
                  <p>- 10 Posts/Month</p>
                  <p>- 5 Boosts/Month</p>
                 
                    <div className="custom-check-boxes">
                      <div className="checkbox-div1">
                        <label className="custom_check-box">
                          <span className="custom_check-text">$12/Month</span>
                          <input type="checkbox" className="blackbox_custom" />
                        </label>
                        <label className="custom_check-box">
                          <span className="custom_check-text">$123/YEAR</span>
                          <input type="checkbox" className="blackbox_custom" />
                        </label>
                      </div>
                      <div className="checkbox-div2">
                        <label className="custom_check-box">
                          <span className="custom_check-text">
                            350/Month Platinum Points
                          </span>
                          <input type="checkbox" className="blackbox_custom" />
                        </label>
                      </div>
                    </div>
                    <div className="packages-btns">
                      <button onClick={handleroute} className="platinum-btn">CHECKOUT</button>
                    </div>
                
                </div>

              </div> */}

              packagecheckout






              <div
              className="gold-package"
              data-aos="fade-right"
              data-aos-anchor-placement="center-bottom"
              data-aos-duration="3000"
            >
              <img className="goldpkg" src={goldpackage} />

              <p className="goldp">{data?.plan?.name}</p>
              <p>+ Good, Easy Money!</p>
              <p>+ {data?.plan?.posts_limit} Posts/Month</p>
              <p>+ {data?.plan?.messages_limit} Messages Per Month</p>
              <p>+ Keep {data?.plan?.sales_percent}% of Sales</p>
              <p>+ Keep {data?.plan?.tips_percent}% of Tips</p>
              <p>+ Earn {data?.plan?.platinum_percent}% in Platinum Points on Sales</p>
              <p>- Can Only View Requests</p>
              {/* <p>- 10 Posts/Month</p> */}
              <p>- {data?.plan?.boost_limit} Boosts/Month</p>

              <div className="custom-check-boxes">
                <div className="checkbox-div1">
                  {data?.plan_time?.map((plantime) => (<label className="custom_check-box">
                    <span className="custom_check-text">${plantime?.price}/{plantime?.plan_time}</span>
                    <input onChange={() => handlepkg(plantime?.id)}  type="checkbox" className="blackbox_custom" />
                  </label>))}
               
                </div>
               
              </div>
              <div className="packages-btns">
                <button onClick={packagecheckout} className="gold-btn">CHECKOUT</button>
              </div>

            </div>


<div className="col-lg-5 col-md-6">


<div
                  className="platinum-package"
                  data-aos="fade-left"
                  data-aos-anchor-placement="center-bottom"
                  data-aos-duration="3000"
                >
                  <p>+ Awesome Money!</p>
                  <p>+ 10 Posts/Month</p>
                  <p>+ 20 Messages Per Month</p>
                  <p>+ Keep 80% of Sales</p>
                  <p>+ Keep 100% of Tips</p>
                  <p>+ Earn 2% in Platinum Points on Sales</p>
                  <p>- Can Only View Requests</p>
                  <p>- 10 Posts/Month</p>
                  <p>- 5 Boosts/Month</p>
                 
                    <div className="custom-check-boxes">
                      <div className="checkbox-div1">
                        <label className="custom_check-box">
                          <span className="custom_check-text">$12/Month</span>
                          <input type="checkbox" className="blackbox_custom" />
                        </label>
                        <label className="custom_check-box">
                          <span className="custom_check-text">$123/YEAR</span>
                          <input type="checkbox" className="blackbox_custom" />
                        </label>
                      </div>
                      <div className="checkbox-div2">
                        <label className="custom_check-box">
                          <span className="custom_check-text">
                            350/Month Platinum Points
                          </span>
                          <input type="checkbox" className="blackbox_custom" />
                        </label>
                      </div>
                    </div>
                    <div className="packages-btns">
                      <button onClick={packagecheckout} className="platinum-btn">CHECKOUT</button>
                    </div>
                
                </div>

              </div>
























<div
className="platinum-package"
data-aos="fade-left"
data-aos-anchor-placement="center-bottom"
data-aos-duration="3000"
>
<p>+ Awesome Money!</p>
<p>+ 10 Posts/Month</p>
<p>+ 20 Messages Per Month</p>
<p>+ Keep 80% of Sales</p>
<p>+ Keep 100% of Tips</p>
<p>+ Earn 2% in Platinum Points on Sales</p>
<p>- Can Only View Requests</p>
<p>- 10 Posts/Month</p>
<p>- 5 Boosts/Month</p>

<div className="custom-check-boxes">
  <div className="checkbox-div1">
    <label className="custom_check-box">
      <span className="custom_check-text">$12/Month</span>
      <input type="checkbox" className="blackbox_custom" />
    </label>
    <label className="custom_check-box">
      <span className="custom_check-text">$123/YEAR</span>
      <input type="checkbox" className="blackbox_custom" />
    </label>
  </div>
  <div className="checkbox-div2">
    <label className="custom_check-box">
      <span className="custom_check-text">
        350/Month Platinum Points
      </span>
      <input type="checkbox" className="blackbox_custom" />
    </label>
  </div>
</div>
<div className="packages-btns">
  <button onClick={packagecheckout} className="platinum-btn">CHECKOUT</button>
</div>

</div>



































































<section className="checkout">
<div className="container">
  <div className="checkout-content">
    <div className="row">
      <div className="col-md-12">
        <h2
          className="checkout__title"
          data-aos="fade-right"
          data-aos-anchor-placement="center-bottom"
          data-aos-duration="3000"
        >
          CHECKOUT
        </h2>
      </div>
    </div>
    <form action="/">
      <div className="row">
        <div className="col-lg-7">
          <div
            className="checkbox-outer"
            data-aos="fade-right"
            data-aos-anchor-placement="center-bottom"
            data-aos-duration="3000"
          >
            <label className="custom_check-box label-1">
              <span className="custom_check-text">
                PLATINUM MONTHLY MEMBERSHIP&nbsp; &nbsp;
                <span className="actual-price">$34/Month</span>&nbsp;
                &nbsp;
                <span className="discount-price gradiant-text">
                  $34/Month
                </span>
              </span>
              <input type="checkbox" className="blackbox_custom" />
            </label>
          </div>
        </div>
        <div className="col-lg-5">
          <div
            className="checkbox-outer"
            data-aos="fade-left"
            data-aos-anchor-placement="center-bottom"
            data-aos-duration="3000"
          >
            <label className="custom_check-box lable-2">
              <span className="custom_check-text">
                ADD <span class="gradiant-text">$50</span> to my
                platinum bank
              </span>
              <span className="small-tagline">
                (FOR BOOST OR OTHER FEATURES)
              </span>
              <input type="checkbox" className="blackbox_custom" />
            </label>
          </div>
        </div>
        <div className="col-md-12">
          <div
            className="subtotal"
            data-aos="fade-right"
            data-aos-anchor-placement="center-bottom"
            data-aos-duration="3000"
          >
            <h3>
              SUBTOTAL: <span className="subtotal-price">$73</span>
            </h3>
          </div>
        </div>
        <div className="col-md-12">
          <label
            htmlFor="promo"
            data-aos="fade-left"
            data-aos-anchor-placement="center-bottom"
            data-aos-duration="3000"
          >
            PROMO CODE
          </label>
        </div>
        <div className="col-md-6">
          <div className="form-group">
            <input
              type="text"
              className="form-control promo"
              id="promo"
              data-aos="fade-right"
              data-aos-anchor-placement="center-bottom"
              data-aos-duration="3000"
            />
          </div>
        </div>
        <div className="col-md-6">
          <p
            className="saved-price"
            data-aos="fade-left"
            data-aos-anchor-placement="center-bottom"
            data-aos-duration="3000"
          >
            YOU Saved <span className="five-dollers">$5</span>
          </p>
        </div>
      </div>
      <div className="row">
        <div class="col-md-12">
          <div className="text-center checkout-btn">
            <button type="button" onClick={handlepayment} class="sign_actionBtn">GO TO PAYMENT</button>
          </div>
        </div>
      </div>
    </form>
  </div>
</div>
</section>