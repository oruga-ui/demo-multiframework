<template>
  <section>
    <o-steps stepContentClass="o-demo-form">
      <o-step-item step="1" label="Profile">
        <h1 class="title has-text-centered">Fill your profile information</h1>
        <div class="">
          <o-field :message="messages.name" variant="danger">
            <o-dropdown aria-role="list" v-model="currentMenu">
              <o-button
                variant="primary"
                slot="trigger"
                slot-scope="{ active }"
              >
                <span>{{ currentMenu.text }}</span>
                <o-icon :icon="active ? 'caret-up' : 'caret-down'"></o-icon>
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
        </div>

        <o-field grouped label="Work information">
          <o-input name="company" placeholder="Company" expanded></o-input>
          <o-input name="email" placeholder="Email" expanded></o-input>
        </o-field>

        <o-field grouped label="Address">
          <o-input name="street" placeholder="Street" expanded></o-input>
          <o-input name="zip" placeholder="Zip Code" expanded></o-input>
          <o-input name="country" placeholder="Country" expanded></o-input>
        </o-field>

        <o-field label="I need visitors to consent to the following agreements" variant="danger" :message="messages.privacyTerms">
          <o-checkbox v-model="privacy">Privacy Policy</o-checkbox>
          <o-checkbox v-model="terms">Terms and Conditions</o-checkbox>
        </o-field>
      </o-step-item>

      <o-step-item step="2" label="Account">
        <h1 class="title has-text-centered">Create an account</h1>
        <div class="">
          <o-field label="Username" label-for="username">
            <o-input id="username" type="text" placeholder="Username" />
          </o-field>
        </div>
        <div class="">
          <o-field
            label="Password"
            label-for="password"
            variant="danger"
            message="Please choose a password"
            grouped
          >
            <o-input
              id="password"
              type="password"
              placeholder="Password"
              expanded
            />
            <o-input
              id="repeat-password"
              type="password"
              placeholder="Repeat assword"
              expanded
            />
          </o-field>
        </div>
      </o-step-item>

      <o-step-item label="Finish" disabled>
        <h1 class="title has-text-centered">You're done!</h1>
        🎉 Your account setup is complete! Click on the button below to complete
        the process
      </o-step-item>

      <template slot="navigation" slot-scope="{ previous, next }">
        <div class="o-demo__navigation-wrapper">
          <o-button
            outlined
            v-show="!previous.disabled"
            @click.prevent="previous.action"
          >
            Previous
          </o-button>
          <o-button
            outlined
            v-show="!next.disabled"
            @click.prevent="goNextIfStepIsValid(next.action)"
          >
            Next
          </o-button>
        </div>
      </template>
    </o-steps>
    <form class="o-demo-form"></form>
  </section>
</template>

<script>
export default {
  data: function () {
    return {
      currentStep: 0,
      name: "",
      privacy: false,
      terms: false,
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
        let valid = true;
        this.messages = {}
        switch (stepNumber) {
            case 0:
            if (this.name === "") {
                this.messages = Object.assign({...this.messages}, { name: "Name is required" });
                valid = false;
            }
            if (!this.privacy || !this.terms) {
                this.messages = Object.assign({...this.messages}, { privacyTerms: "You have to accept both" });
                valid = false;
            }
            break;
            case 1:
                break;
        }
        return valid;
    },
    goNextIfStepIsValid(action) {
        if (this.isAValidStep(this.currentStep)) {
            action();
        }
    },
  },
};
</script>
