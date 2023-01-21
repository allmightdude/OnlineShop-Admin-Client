<template>
  <div class="main">
    <div class="broadcast">
      <ul class="broadcast__list">
        <li class="broadcast__item">
          <a href="">Your Cart</a>
        </li>
        >
        <li class="broadcast__item">
          <a href="">Place Order</a>
        </li>
        >
        <li class="broadcast__item">
          <a href=""><b>Payment</b></a>
        </li>
      </ul>
    </div>

    <h1 class="mt-3"><b>Your Orders</b></h1>

    <div class="table-responsive" data-pattern="priority-columns">
      <table
        summary="This table shows how to create responsive tables using RWD-Table-Patterns' functionality"
        class="table table-bordered"
      >

        <thead>
          <tr>
            <th>
              ORDER PLACED <br />
              May 15 , 2022
            </th>
            <th>
              TOTAL <br />
              $458.94
            </th>
            <th>
              SHIP TO <br />
              <a href="#">Jack <i class="fa fa-angle-down"></i></a>
            </th>
            <th>
              ORDER # 114-785142-454758
              <a href="#">Order Details</a> | <a href="#">Invoice</a>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <h4>
                <b>Estimated Delivery</b> <i class="fa fa-angle-down"></i>
              </h4>
            </td>
            <td>
              <a href="#">Title</a>
              <p>Sold by Amazon Expert Sales LLC.</p>
              <p><b>Quantity : 4</b></p>
              <p>$99</p>

              <div class="actions d-flex gap-sm mt-3">
                <base-button size="sm-size">Buy it again</base-button>
                <base-button size="sm-size" mode="grey"
                  >View your item</base-button
                >
              </div>
            </td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
    <!--end of .table-responsive-->
  </div>
</template>

<style lang="scss" scoped>
.main {
  margin: 0 auto;
  max-width: 120rem;
  padding: 3rem;
}

.table-responsive {
  border-radius: 6px;
}
.header {
  display: flex;

  &__item {
  }
}
h2 {
  text-align: center;
  padding: 20px 0;
}

table caption {
  padding: 0.5em 0;
}

@media screen and (max-width: 767px) {
  table caption {
    display: none;
  }
}

.p {
  text-align: center;
  padding-top: 140px;
  font-size: 14px;
}
table {
  border-radius: 6px;
}

thead {
  background-color: #f0f0f0f5;
}

td,
th {
  padding: 1rem 1.5rem;
  font-size: 1.1rem;
}

</style>
