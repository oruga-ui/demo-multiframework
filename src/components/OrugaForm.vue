<template>
  <section>
    <o-steps v-model="currentStep" stepContentClass="o-demo-form">
      <o-step-item step="1" label="Profile">
        <h2 class="o-demo__title">Fill your profile information</h2>
          <o-field :message="messages.name" :variant="messages.name ? 'danger' : ''">
            <o-dropdown aria-role="list" v-model="currentMenu">
              <o-button
                variant="primary"
                slot="trigger"
                slot-scope="{ active }"
                :icon-right="active ? 'caret-up' : 'caret-down'">

                <span>{{ currentMenu.text }}</span>
              </o-button>

              <o-dropdown-item
                v-for="(menu, index) in menus"
                :key="index"
                :value="menu"
                aria-role="listitem"
              >
                <span>{{ menu.text }}</span>
              </o-dropdown-item>
            </o-dropdown>
            <o-input
              id="name"
              type="text"
              placeholder="Name"
              v-model="name"
              expanded
            />
          </o-field>

        <o-field label="Work information">
          <div class="o-demo-form__field-2-col">
            <o-input name="company" placeholder="Company" expanded></o-input>
            <o-input name="email" placeholder="Email" expanded></o-input>
          </div>
        </o-field>

        <o-field label="Address">
          <div class="o-demo-form__field-3-col">
            <o-input name="street" placeholder="Street" expanded></o-input>
            <o-input name="zip" placeholder="Zip Code" expanded></o-input>
            <o-input name="country" placeholder="Country" expanded></o-input>
          </div>
        </o-field>
        <o-field
          label="I need visitors to consent to the following agreements"
          variant="danger"
          :message="messages.privacyTerms"
        >
          <div class="o-demo-form__field-2-col">
            <o-checkbox v-model="privacy">Privacy Policy</o-checkbox>
            <o-checkbox v-model="terms">Terms and Conditions</o-checkbox>
          </div>
        </o-field>
      </o-step-item>

      <o-step-item step="2" label="Account">
        <h1 class="title has-text-centered">Create an account</h1>
        <o-field
          label="Username"
          label-for="username"
          :message="messages.username"
          :variant="messages.username ? 'danger' : ''"
        >
          <o-input
            v-model="username"
            id="username"
            type="text"
            placeholder="Username"
            expanded
          />
        </o-field>
        <o-field
          label="Password"
          label-for="password"
          :variant="messages.password ? 'danger' : ''"
          :message="messages.password"
        >
          <div class="o-demo-form__field-2-col">
            <o-input
              v-model="password"
              id="password"
              type="password"
              placeholder="Password"
              expanded
            />
            <o-input
              v-model="passwordCheck"
              id="repeat-password"
              type="password"
              placeholder="Repeat assword"
              expanded
            />
          </div>
        </o-field>
      </o-step-item>

      <o-step-item label="Finish" step="3">
        <h1 class="title has-text-centered">You're done!</h1>
        <div class="o-demo-form__activate-button-wrapper">
          <o-button outlined variant="primary" @click="activateAccount"
            >Click to activate account</o-button
          >
        </div>
        <p style="position: relative">
          <o-loading full-page :active.sync="isLoading">
            <o-icon icon="sync-alt" size="large" spin></o-icon>
          </o-loading>
        </p>
      </o-step-item>

      <template slot="navigation" slot-scope="{ previous, next }">
        <div class="o-demo__navigation-wrapper">
          <o-button
            outlined
            icon-left="chevron-left"
            variant="primary"
            v-show="!previous.disabled"
            @click.prevent="previous.action"
          >
            Prev
          </o-button>
          <o-button
            outlined
            icon-right="chevron-right"
            variant="primary"
            v-show="!next.disabled"
            @click.prevent="goNextIfStepIsValid(next.action)"
          >
            Next
          </o-button>
        </div>
      </template>
    </o-steps>
  </section>
</template>

<script>
export default {
  data: function () {
    return {
      currentStep: 1,
      name: "",
      privacy: false,
      username: "",
      password: "",
      passwordCheck: "",
      terms: false,
      isLoading: false,
      messages: {},
      currentMenu: { value: "mr", text: "Mr." },
      menus: [
        { value: "mr", text: "Mr." },
        { value: "mrs", text: "Mrs." },
      ],
    };
  },
  methods: {
    isAValidStep(stepNumber) {
      this.messages = {};
      switch (stepNumber) {
        case 1:
          if (this.name === "") {
            this.messages.name = "Name is required";
          }
          if (!this.privacy || !this.terms) {
            this.messages.privacyTerms = "You have to accept both";
          }
          break;
        case 2:
          if (this.username === "") {
            this.messages.username = "Username is required";
          }
          if (this.password === "") {
            this.messages.password = "Password is required";
          }
          if (this.password !== this.passwordCheck) {
            this.messages.password = "The two passwords must be equal";
          }
          break;
      }
      this.messages = Object.assign({}, { ...this.messages });
      return Object.keys(this.messages).length === 0;
    },
    goNextIfStepIsValid(action) {
      if (this.isAValidStep(this.currentStep)) {
        action();
      }
    },
    activateAccount() {
      this.isLoading = true;
      setTimeout(() => {
        location.reload();
        this.isLoading = false;
      }, 3 * 1000);
    },
  },
};
</script>
