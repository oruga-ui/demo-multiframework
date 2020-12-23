<template>
    <section>
        <h1> Tailwind </h1>
        <form class="o-demo-form">
            <div class="">
                <o-field label="Username" label-for="username">
                    <o-input id="username" type="text" placeholder="Username" />
                </o-field>
            </div>
            <div class="">
                <o-field label="Password" label-for="password" variant="danger" message="Please choose a password">
                    <o-input id="password" type="password" placeholder="Password" />
                </o-field>
            </div>
            <div class="">
                <o-dropdown aria-role="list">
                    <o-button variant="primary" slot="trigger" slot-scope="{ active }">
                        <span>Click me!</span>
                        <o-icon :icon="active ? 'caret-up' : 'caret-down'"></o-icon>
                    </o-button>

                    <o-dropdown-item aria-role="listitem">Action</o-dropdown-item>
                    <o-dropdown-item aria-role="listitem">Another action</o-dropdown-item>
                    <o-dropdown-item aria-role="listitem">Something else</o-dropdown-item>
                </o-dropdown>
            </div>
            <div class="o-demo-form__buttons-wrapper">
                <div>
                    <o-button label="Sign In" native-type="button" />
                    <o-button label="Signup" icon-left="plus" />
                </div>
                <div class="">
                    <o-button label="Forgot password?" outlined />
                </div>
            </div>
        </form>
    </section>
</template>
