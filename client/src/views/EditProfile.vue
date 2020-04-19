<template>
    <section class="section-edit-profile">
        <div class="container">
            <h2 class="edit-profile__heading--secondary">
                Edit Profile
            </h2>
            <form class="edit-form">
                <div class="edit-form__group">
                    <label class="edit-form__label" for="name">Name</label>
                    <input
                        id="name"
                        type="text"
                        class="edit-form__input"
                        placeholder="Name"
                        required
                    />
                </div>
                <div class="edit-form__group">
                    <label class="edit-form__label" for="email">Email</label>
                    <input
                        id="email"
                        type="email"
                        class="edit-form__input"
                        placeholder="Email"
                        required
                    />
                </div>
                <div class="edit-form__group">
                    <label class="edit-form__label" for="password"
                        >Password</label
                    >
                    <input
                        id="password"
                        type="password"
                        class="edit-form__input"
                        placeholder="Password"
                        required
                    />
                </div>
                <div class="edit-form__group">
                    <label class="edit-form__label" for="confirmPassword"
                        >Confirm password</label
                    >
                    <input
                        id="confirmPassword"
                        type="password"
                        class="edit-form__input"
                        placeholder="Confirm password"
                        required
                    />
                </div>
                <div class="edit-form__group">
                    <label class="edit-form__label" for="address"
                        >Address</label
                    >
                    <input
                        id="address"
                        type="text"
                        class="edit-form__input"
                        placeholder="Address"
                    />
                </div>
                <div class="edit-form__group">
                    <label class="edit-form__label" for="phone">Phone</label>
                    <input
                        id="phone"
                        type="number"
                        class="edit-form__input"
                        placeholder="Phone"
                    />
                </div>
                <div class="edit-form__group">
                    <label class="edit-form__label" for="github"
                        >Github Link</label
                    >
                    <input
                        id="github"
                        type="url"
                        class="edit-form__input"
                        placeholder="Github Link"
                    />
                </div>
                <div class="edit-form__group">
                    <label class="edit-form__label" for="linkedin"
                        >LinkedIn Link</label
                    >
                    <input
                        id="linkedin"
                        type="url"
                        class="edit-form__input"
                        placeholder="LinkedIn Link"
                    />
                </div>
            </form>
        </div>
    </section>
</template>
