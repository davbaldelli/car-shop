<div class="login-container form-hidden">
    <div class="close-form">
        <button class="btn-close"></button>
    </div>
    <div class="form-switch">
        <ul class="nav nav-tabs" id="myTab" role="tablist">
            <li class="nav-item" role="presentation">
                <button class="nav-link active" id="login-tab" data-bs-toggle="tab" data-bs-target="#login" type="button" role="tab" aria-controls="Login" aria-selected="true">Login</button>
            </li>
            <li class="nav-item" role="presentation">
                <button class="nav-link" id="signup-tab" data-bs-toggle="tab" data-bs-target="#signup" type="button" role="tab" aria-controls="signup" aria-selected="false">Sign Up</button>
            </li>
        </ul>
    </div>
    <div class="tab-content">
        <div class=" tab-pane fade show active" id="login" role="tabpanel" aria-labelledby="login-tab">
            <div class="login-form">
                <h2 class="h2-login">Login</h2>
                <label class="login-label" for="email">Email</label><input id="email" class="email-input"  type="text" placeholder="email@example.com"><br>
                <label class="login-label" for="password">Password</label><input id="password" class="password-input"  type="password" placeholder="Password"><br>
                <button class="btn btn-primary btn-login">Login</button>
            </div>
        </div>
        <div class="tab-pane fade" id="signup" role="tabpanel" aria-labelledby="signup-tab">
            <div class="signup-form ">
                <h2 class="h2-signup">Sign up</h2>
                <label class="signup-label" for="email">Email</label><input id="email" class="email-input"  type="text" placeholder="email@example.com"><br>
                <label class="signup-label" for="password">Password</label><input id="password" class="password-input"  type="password" placeholder="Password"><br>
                <label class="signup-label" for="password">Password</label><input id="password-2" class="password-input"  type="password" placeholder="Password"><br>
                <button class="btn btn-primary btn-signup">Sign Up</button>
            </div>
        </div>
    </div>
</div>