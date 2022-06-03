<div class="login-container form-hidden">
    <div class="close-form">
        <button id="close-login-form" class="btn-close"></button>
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
            <form id="login-form-dropdown" class="login-form">
                <h2 class="h2-login">Login</h2>
                <label class="login-label" for="username-log">Username</label><input id="username-log" class="username-input" type="text" placeholder="Username"><br>
                <label class="login-label" for="password-log">Password</label><input id="password-log" class="password-input"  type="password" placeholder="Password"><br>
                <span class="error-form" id="error-login"><p></p></span>
                <button class="btn btn-primary btn-login" id="btn-login" type="submit">Login</button>
            </form>
        </div>
        <div class="tab-pane fade" id="signup" role="tabpanel" aria-labelledby="signup-tab">
            <form id="signup-form-dropdown" class="signup-form">
                <h2 class="h2-signup">Sign up</h2>
                <label class="signup-label" for="username-sign">Username</label><input id="username-sign" class="username-input"  type="text" placeholder="Username"><br>
                <label class="signup-label" for="password-sign">Password</label><input id="password-sign" class="password-input"  type="password" placeholder="Password"><br>
                <label class="signup-label" for="password2-sign">Password</label><input id="password2-sign" class="password-input"  type="password" placeholder="Password"><br>
                <span class="error-form" id="error-sign"></span>
                <button class="btn btn-primary btn-signup" id="btn-signup" type="submit">Sign Up</button>
            </form>
        </div>
    </div>
</div>