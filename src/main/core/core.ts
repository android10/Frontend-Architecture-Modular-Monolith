class CoreFeature implements Feature {
    readonly name = 'core'    
}

/** List of enabled features **/
const allFeatures = [
    new CoreFeature(),
    new MoviesFeature(),
    new ProfileFeature(),
    new AboutFeature(),
];