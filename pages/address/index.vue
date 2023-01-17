<template>
  <main class="pd-2">
    <div class="broadcast">
      <ul class="broadcast__list">
        <li class="broadcast__item">
          <a href="">Category</a>
        </li>
        >
        <li class="broadcast__item">
          <a href="">Product title</a>
        </li>
      </ul>
    </div>

    <h1>Your Addresses</h1>

    <div class="addresses">
      <div class="addresses__item">
        <h2>Add Address</h2>
      </div>
      <div class="addresses__item">
        <div class="addresses__fullname">Address fullName</div>
        <div class="addresses__street">streeetAddress</div>
        <div class="addresses__address">city , state , zipCode</div>
        <div class="addresses__country">country</div>
        <div class="addresses__phoneNumber">phone number : phonenumber</div>

        <div class="actions mt-3">
          <a href="" class="fz-1">Edit</a> |
          <a href="#" class="fz-1">Delete</a> |
          <a href="#" class="fz-1">Set as Default</a>
        </div>
      </div>
    </div>
  </main>
</template>

<style lang="scss" scoped>
.addresses {
  display: flex;
  gap: 1rem;
  margin-top: 3rem;

  &__item {
    padding: 3rem;
    border: 1px dashed #000;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
  }
  
}
</style>
