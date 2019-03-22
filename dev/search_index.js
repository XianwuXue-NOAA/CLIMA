var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Home",
    "title": "Home",
    "category": "page",
    "text": ""
},

{
    "location": "#CLIMA-1",
    "page": "Home",
    "title": "CLIMA",
    "category": "section",
    "text": "Climate Machine"
},

{
    "location": "Utilities/#",
    "page": "Utilities",
    "title": "Utilities",
    "category": "page",
    "text": ""
},

{
    "location": "Utilities/#Utilities-1",
    "page": "Utilities",
    "title": "Utilities",
    "category": "section",
    "text": ""
},

{
    "location": "Utilities/#CLIMA.Utilities.RootSolvers",
    "page": "Utilities",
    "title": "CLIMA.Utilities.RootSolvers",
    "category": "module",
    "text": "RootSolvers\n\nModule containing functions for solving roots of non-linear equations. The returned result is a tuple of the root and a Bool indicating convergence.\n\nfind_zero(f::F,\n           x_0::T,\n           x_1::T,\n           args::Tuple,\n           iter_params::IterParams{R, Int},\n           method::RootSolvingMethod\n           )::Tuple{T, Bool} where {F, R, T <: Union{R, AbstractArray{R}}}\n\n\n\nInterface\n\nfind_zero compute x^* such that f(x^*) = 0\n\nArguments\n\nf equation roots function, where f is callable via f(x, args...)\nx_0, x_1 initial guesses\nIterParams struct containing absolute tolerance on f(x^*) and maximum iterations\nRootSolvingMethod Algorithm to solve roots of the equation:\nSecantMethod Secant method\nRegulaFalsiMethod Regula Falsi Method\n\nSingle example\n\njulia> using RootSolvers\nx_0 = 0.0\nx_1 = 1.0\nf(x, y) = x^2 - y\nx_star2 = 10000.0\nargs = Tuple(x_star2)\nx_star = sqrt(x_star2)\ntol_abs = 1.0e-3\niter_max = 100\n\nx_root, converged = find_zero(f,\n                              x_0,\n                              x_1,\n                              args,\n                              IterParams(tol_abs, iter_max),\n                              SecantMethod())\n\nBroadcast example\n\nTo broadcast, wrap arguments that need not be broadcasted in a Ref.\n\njulia> using RootSolvers\nx_0 = rand(5,5)\nx_1 = rand(5,5).+2.0\nf(x, y) = x^2 - y\nx_star2 = 10000.0\nargs = Tuple(x_star2)\nx_star = sqrt(x_star2)\ntol_abs = 1.0e-3\niter_max = 100\nx_root, converged = find_zero.(f,\n                               x_0,\n                               x_1,\n                               Ref(args),\n                               Ref(IterParams(tol_abs, iter_max)),\n                               Ref(SecantMethod()))\n\n\n\n\n\n"
},

{
    "location": "Utilities/#CLIMA.Utilities.RootSolvers.find_zero",
    "page": "Utilities",
    "title": "CLIMA.Utilities.RootSolvers.find_zero",
    "category": "function",
    "text": "find_zero(f, x_0, x_1, args, iter_params, SecantMethod)\n\nSolves the root equation, f, using Secant method. See RootSolvers for more information.\n\n\n\n\n\nfind_zero(f, x_0, x_1, args, iter_params, RegulaFalsiMethod)\n\nSolves the root equation, f, using Regula Falsi method. See RootSolvers for more information.\n\n\n\n\n\n"
},

{
    "location": "Utilities/#Root-solvers-1",
    "page": "Utilities",
    "title": "Root solvers",
    "category": "section",
    "text": "CLIMA.Utilities.RootSolvers\nCLIMA.Utilities.RootSolvers.find_zero"
},

{
    "location": "Utilities/#CLIMA.Utilities.MoistThermodynamics",
    "page": "Utilities",
    "title": "CLIMA.Utilities.MoistThermodynamics",
    "category": "module",
    "text": "MoistThermodynamics\n\nMoist thermodynamic functions, e.g., for air pressure (atmosphere equation of state), latent heats of phase transitions, saturation vapor pressures, and saturation specific humidities\n\n\n\n\n\n"
},

{
    "location": "Utilities/#CLIMA.Utilities.MoistThermodynamics.gas_constant_air",
    "page": "Utilities",
    "title": "CLIMA.Utilities.MoistThermodynamics.gas_constant_air",
    "category": "function",
    "text": "gas_constant_air([q_t=0, q_l=0, q_i=0])\n\nReturn the specific gas constant of moist air, given the total specific humidity q_t, and, optionally, the liquid specific humidity q_l, and the ice specific humidity q_i. When no input argument is given, it returns the specific gas constant of dry air.\n\n\n\n\n\n"
},

{
    "location": "Utilities/#CLIMA.Utilities.MoistThermodynamics.air_pressure",
    "page": "Utilities",
    "title": "CLIMA.Utilities.MoistThermodynamics.air_pressure",
    "category": "function",
    "text": "air_pressure(T, ρ[, q_t=0, q_l=0, q_i=0])\n\nReturn the air pressure from the equation of state (ideal gas law), given the air temperature T, the (moist-)air density ρ, and, optionally, the total specific humidity q_t, the liquid specific humidity q_l, and the ice specific humidity q_i. Without the specific humidity arguments, it returns the air pressure from the equation of state of dry air.\n\n\n\n\n\n"
},

{
    "location": "Utilities/#CLIMA.Utilities.MoistThermodynamics.air_density",
    "page": "Utilities",
    "title": "CLIMA.Utilities.MoistThermodynamics.air_density",
    "category": "function",
    "text": "air_density(T, p[, q_t=0, q_l=0, q_i=0])\n\nReturn the (moist-)air density from the equation of state (ideal gas law), given the air temperature T, the pressure p, and, optionally, the total specific humidity q_t, the liquid specific humidity q_l, and the ice specific humidity q_i. Without the specific humidity arguments, it returns the air density from the equation of state of dry air.\n\n\n\n\n\n"
},

{
    "location": "Utilities/#CLIMA.Utilities.MoistThermodynamics.cp_m",
    "page": "Utilities",
    "title": "CLIMA.Utilities.MoistThermodynamics.cp_m",
    "category": "function",
    "text": "cp_m([q_t=0, q_l=0, q_i=0])\n\nReturn the isobaric specific heat capacity of moist air, given the total water specific humidity q_t, liquid specific humidity q_l, and ice specific humidity q_i. Without the specific humidity arguments, it returns the isobaric specific heat capacity of dry air.\n\n\n\n\n\n"
},

{
    "location": "Utilities/#CLIMA.Utilities.MoistThermodynamics.cv_m",
    "page": "Utilities",
    "title": "CLIMA.Utilities.MoistThermodynamics.cv_m",
    "category": "function",
    "text": "cv_m([q_t=0, q_l=0, q_i=0])\n\nReturn the isochoric specific heat capacity of moist air, given the total water specific humidity q_t, liquid specific humidity q_l, and ice specific humidity q_i. Without the specific humidity arguments, it returns the isochoric specific heat capacity of dry air.\n\n\n\n\n\n"
},

{
    "location": "Utilities/#CLIMA.Utilities.MoistThermodynamics.air_temperature",
    "page": "Utilities",
    "title": "CLIMA.Utilities.MoistThermodynamics.air_temperature",
    "category": "function",
    "text": "air_temperature(e_int[, q_t=0, q_l=0, q_i=0])\n\nReturn the air temperature, given the internal energy e_int per unit mass, and, optionally, the total specific humidity q_t, the liquid specific humidity q_l, and the ice specific humidity q_i.\n\n\n\n\n\n"
},

{
    "location": "Utilities/#CLIMA.Utilities.MoistThermodynamics.internal_energy",
    "page": "Utilities",
    "title": "CLIMA.Utilities.MoistThermodynamics.internal_energy",
    "category": "function",
    "text": "internal_energy(T[, q_t=0, q_l=0, q_i=0])\n\nReturn the internal energy per unit mass, given the temperature T, and, optionally, the total specific humidity q_t, the liquid specific humidity q_l, and the ice specific humidity q_i.\n\n\n\n\n\n"
},

{
    "location": "Utilities/#CLIMA.Utilities.MoistThermodynamics.internal_energy_sat",
    "page": "Utilities",
    "title": "CLIMA.Utilities.MoistThermodynamics.internal_energy_sat",
    "category": "function",
    "text": "internal_energy_sat(T, ρ, q_t)\n\nReturn the internal energy per unit mass in thermodynamic equilibrium at saturation, given the temperature T, (moist-)air density ρ, and total specific humidity q_t.\n\n\n\n\n\n"
},

{
    "location": "Utilities/#CLIMA.Utilities.MoistThermodynamics.total_energy",
    "page": "Utilities",
    "title": "CLIMA.Utilities.MoistThermodynamics.total_energy",
    "category": "function",
    "text": "total_energy(KE, PE, T[, q_t=0, q_l=0, q_i=0])\n\nReturn the total energy per unit mass, given the kinetic energy per unit mass KE, the potential energy per unit mass PE, the temperature T, and, optionally, the total specific humidity q_t, the liquid specific humidity q_l, and the ice specific humidity q_i.\n\n\n\n\n\n"
},

{
    "location": "Utilities/#CLIMA.Utilities.MoistThermodynamics.latent_heat_vapor",
    "page": "Utilities",
    "title": "CLIMA.Utilities.MoistThermodynamics.latent_heat_vapor",
    "category": "function",
    "text": "latent_heat_vapor(T)\n\nReturn the specific latent heat of vaporization at temperature T.\n\n\n\n\n\n"
},

{
    "location": "Utilities/#CLIMA.Utilities.MoistThermodynamics.latent_heat_sublim",
    "page": "Utilities",
    "title": "CLIMA.Utilities.MoistThermodynamics.latent_heat_sublim",
    "category": "function",
    "text": "latent_heat_sublim(T)\n\nReturn the specific latent heat of sublimation at temperature T.\n\n\n\n\n\n"
},

{
    "location": "Utilities/#CLIMA.Utilities.MoistThermodynamics.latent_heat_fusion",
    "page": "Utilities",
    "title": "CLIMA.Utilities.MoistThermodynamics.latent_heat_fusion",
    "category": "function",
    "text": "latent_heat_fusion(T)\n\nReturn the specific latent heat of fusion at temperature T.\n\n\n\n\n\n"
},

{
    "location": "Utilities/#CLIMA.Utilities.MoistThermodynamics.latent_heat_generic",
    "page": "Utilities",
    "title": "CLIMA.Utilities.MoistThermodynamics.latent_heat_generic",
    "category": "function",
    "text": "latent_heat_generic(T, LH_0, cp_diff)\n\nReturn the specific latent heat of a generic phase transition between two phases using Kirchhoff\'s relation.\n\nThe latent heat computation assumes constant isobaric specifc heat capacities of the two phases. T is the temperature, LH_0 is the latent heat of the phase transition at T_0, and cp_diff is the difference between the isobaric specific heat capacities (heat capacity in the higher-temperature phase minus that in the lower-temperature phase).\n\n\n\n\n\n"
},

{
    "location": "Utilities/#CLIMA.Utilities.MoistThermodynamics.saturation_vapor_pressure",
    "page": "Utilities",
    "title": "CLIMA.Utilities.MoistThermodynamics.saturation_vapor_pressure",
    "category": "function",
    "text": "`saturation_vapor_pressure(T, Liquid())`\n\nReturn the saturation vapor pressure over a plane liquid surface at temperature T.\n\n`saturation_vapor_pressure(T, Ice())`\n\nReturn the saturation vapor pressure over a plane ice surface at temperature T.\n\n`saturation_vapor_pressure(T, LH_0, cp_diff)`\n\nCompute the saturation vapor pressure over a plane surface by integration of the Clausius-Clepeyron relation.\n\nThe Clausius-Clapeyron relation\n\ndlog(p_vs)/dT = [LH_0 + cp_diff * (T-T_0)]/(R_v*T^2)\n\nis integrated from the triple point temperature T_triple, using Kirchhoff\'s relation\n\nL = LH_0 + cp_diff * (T - T_0)\n\nfor the specific latent heat L with constant isobaric specific heats of the phases. The linear dependence of the specific latent heat on temperature T allows analytic integration of the Clausius-Clapeyron relation to obtain the saturation vapor pressure p_vs as a function of the triple point pressure press_triple.\n\n\n\n\n\n"
},

{
    "location": "Utilities/#CLIMA.Utilities.MoistThermodynamics.saturation_shum_generic",
    "page": "Utilities",
    "title": "CLIMA.Utilities.MoistThermodynamics.saturation_shum_generic",
    "category": "function",
    "text": "saturation_shum_generic(T, ρ[; phase=Liquid()])\n\nCompute the saturation specific humidity over a plane surface of condensate, given the temperature T and the (moist-)air density ρ.\n\nThe optional argument phase can be Liquid() or ice and indicates the condensed phase.\n\n\n\n\n\n"
},

{
    "location": "Utilities/#CLIMA.Utilities.MoistThermodynamics.saturation_shum",
    "page": "Utilities",
    "title": "CLIMA.Utilities.MoistThermodynamics.saturation_shum",
    "category": "function",
    "text": "saturation_shum(T, ρ[, q_l=0, q_i=0])\n\nCompute the saturation specific humidity, given the temperature T and (moist-)air density ρ.\n\nIf the optional liquid, and ice specific humdities q_t and q_l are given, the saturation specific humidity is that over a mixture of liquid and ice, computed in a thermodynamically consistent way from the weighted sum of the latent heats of the respective phase transitions (Pressel et al., JAMES, 2015). That is, the saturation vapor pressure and from it the saturation specific humidity are computed from a weighted mean of the latent heats of vaporization and sublimation, with the weights given by the fractions of condensate q_l/(q_l + q_i) and q_i/(q_l + q_i) that are liquid and ice, respectively.\n\nIf the condensate specific humidities q_l and q_i are not given or are both zero, the saturation specific humidity is that over a mixture of liquid and ice, with the fraction of liquid given by temperature dependent liquid_fraction(T) and the fraction of ice by the complement 1 - liquid_fraction(T).\n\n\n\n\n\n"
},

{
    "location": "Utilities/#CLIMA.Utilities.MoistThermodynamics.saturation_shum_from_pressure",
    "page": "Utilities",
    "title": "CLIMA.Utilities.MoistThermodynamics.saturation_shum_from_pressure",
    "category": "function",
    "text": "saturation_shum_from_pressure(ρ, T, p_vs)\n\nCompute the saturation specific humidity, given the ambient air density ρ, temperature T, and the saturation vapor pressure p_vs.\n\n\n\n\n\n"
},

{
    "location": "Utilities/#CLIMA.Utilities.MoistThermodynamics.liquid_fraction",
    "page": "Utilities",
    "title": "CLIMA.Utilities.MoistThermodynamics.liquid_fraction",
    "category": "function",
    "text": "liquid_fraction(T[, q_l=0, q_i=0])\n\nReturn the fraction of condensate that is liquid.\n\nIf the optional input arguments q_l and q_i are not given or are zero, the fraction of liquid is a function that is 1 above T_freeze and goes to zero below T_freeze. If q_l or q_i are nonzero, the liquid fraction is computed from them.\n\n\n\n\n\n"
},

{
    "location": "Utilities/#CLIMA.Utilities.MoistThermodynamics.heaviside",
    "page": "Utilities",
    "title": "CLIMA.Utilities.MoistThermodynamics.heaviside",
    "category": "function",
    "text": "heaviside(t)\n\nReturn the Heaviside step function at t.\n\n\n\n\n\n"
},

{
    "location": "Utilities/#CLIMA.Utilities.MoistThermodynamics.phase_partitioning_eq!",
    "page": "Utilities",
    "title": "CLIMA.Utilities.MoistThermodynamics.phase_partitioning_eq!",
    "category": "function",
    "text": "phase_partitioning_eq!(q_l, q_i, T, ρ, q_t)\n\nReturn the partitioning of the phases in equilibrium.\n\nGiven the temperature T and (moist-)air density ρ, phase_partitioning_eq! partitions the total specific humidity q_t into the liquid specific humidity q_l and ice specific humiditiy q_l using the liquid_fraction function. The residual q_t - q_l - q_i is the vapor specific humidity.\n\n\n\n\n\n"
},

{
    "location": "Utilities/#CLIMA.Utilities.MoistThermodynamics.saturation_adjustment",
    "page": "Utilities",
    "title": "CLIMA.Utilities.MoistThermodynamics.saturation_adjustment",
    "category": "function",
    "text": "saturation_adjustment(e_int, ρ, q_t[, T_init = T_triple])\n\nReturn the temperature that is consistent with the internal energy e_int, (moist-)air density ρ, and total specific humidity q_t.\n\nThe optional input value of the temperature T_init is taken as the initial value of the saturation adjustment iterations.\n\n\n\n\n\n"
},

{
    "location": "Utilities/#CLIMA.Utilities.MoistThermodynamics.liquid_ice_pottemp",
    "page": "Utilities",
    "title": "CLIMA.Utilities.MoistThermodynamics.liquid_ice_pottemp",
    "category": "function",
    "text": "liquid_ice_pottemp(T, p[, q_t=0, q_l=0, q_i=0])\n\nReturn the liquid-ice potential temperature, given the temperature T, pressure p, total specific humidity q_t, liquid specific humidity q_l, and ice specific humidity q_i.\n\n\n\n\n\n"
},

{
    "location": "Utilities/#Moist-thermodynamics-1",
    "page": "Utilities",
    "title": "Moist thermodynamics",
    "category": "section",
    "text": "CLIMA.Utilities.MoistThermodynamics\nCLIMA.Utilities.MoistThermodynamics.gas_constant_air\nCLIMA.Utilities.MoistThermodynamics.air_pressure\nCLIMA.Utilities.MoistThermodynamics.air_density\nCLIMA.Utilities.MoistThermodynamics.cp_m\nCLIMA.Utilities.MoistThermodynamics.cv_m\nCLIMA.Utilities.MoistThermodynamics.air_temperature\nCLIMA.Utilities.MoistThermodynamics.internal_energy\nCLIMA.Utilities.MoistThermodynamics.internal_energy_sat\nCLIMA.Utilities.MoistThermodynamics.total_energy\nCLIMA.Utilities.MoistThermodynamics.latent_heat_vapor\nCLIMA.Utilities.MoistThermodynamics.latent_heat_sublim\nCLIMA.Utilities.MoistThermodynamics.latent_heat_fusion\nCLIMA.Utilities.MoistThermodynamics.latent_heat_generic\nCLIMA.Utilities.MoistThermodynamics.saturation_vapor_pressure\nCLIMA.Utilities.MoistThermodynamics.saturation_shum_generic\nCLIMA.Utilities.MoistThermodynamics.saturation_shum\nCLIMA.Utilities.MoistThermodynamics.saturation_shum_from_pressure\nCLIMA.Utilities.MoistThermodynamics.liquid_fraction\nCLIMA.Utilities.MoistThermodynamics.heaviside\nCLIMA.Utilities.MoistThermodynamics.phase_partitioning_eq!\nCLIMA.Utilities.MoistThermodynamics.saturation_adjustment\nCLIMA.Utilities.MoistThermodynamics.liquid_ice_pottemp"
},

{
    "location": "CodingConventions/#",
    "page": "Coding Conventions",
    "title": "Coding Conventions",
    "category": "page",
    "text": ""
},

{
    "location": "CodingConventions/#Coding-Conventions-1",
    "page": "Coding Conventions",
    "title": "Coding Conventions",
    "category": "section",
    "text": "A list of recommended coding conventions.There are good recommendations in the Julia style-guide:\nhttps://docs.julialang.org/en/v1/manual/style-guide/index.html\nhttps://docs.julialang.org/en/v0.6/manual/packages/#Guidelines-for-naming-a-package-1\nPlease only use Unicode characters that are within our list of acceptable Unicode characters (in AcceptableUnicode.md).\nModules, and class names (structs), should follow TitleCase convention. Note that class names cannot coincide with module names.\nFunction names should be lowercase, with words separated by underscores as necessary to improve readability.\nVariable names follow the same convention as function names. Follow CMIP conventions (http://clipc-services.ceda.ac.uk/dreq/) where possible and practicable.\nMake names consistent, distinctive, and meaningful.\nDocument design and purpose, rather than mechanics and implementation (document interfaces and embed documentation in code).\nAvoid variable names that coincide with module and class names, as well as function/variable names that are natively supported.\nNever use the characters \'l\' (lowercase letter el), \'O\' (uppercase letter oh), or \'I\' (uppercase letter eye) as single character variable names.\nTwo white spaces are used for indent. This is not part of the standard convention, but recent development efforts have been using this indentation style (e.g., Google\'s Tensorflow), and this style is being used here also.\nKISS (keep it simple stupid).\nTry to limit all lines to a maximum of 79 characters.\nSingle access point - if a variable/constant is defined more than once, then move it into a module and import (or \"using\") to that module to access the variable in order to enforce a single access point (to avoid consistency issues). Any time a chunk of code is used more than once, or when several similar versions exist across the codebase, consider generalizing this functionality and using a new function to avoid replicating code\n\"import\"/\"using\" should be grouped in the following order:\nStandard library imports.\nRelated third party imports.\nLocal application/library specific imports.\nUse a blank line between each group of imports."
},

{
    "location": "CodingConventions/#Why-do-we-limit-our-Unicode-use?-1",
    "page": "Coding Conventions",
    "title": "Why do we limit our Unicode use?",
    "category": "section",
    "text": "Some characters are visibly indistinguishable. Capital \"a\" and capital alpha are visibly indistinguishable, but are recognized as separate characters (e.g., search distinguishable).\nSome characters are difficult to read. Sometimes, the overline/overdot/hats overlap with characters making them difficult to see.\nPortability issues. Unicode does not render in Jupyter notebook natively (on OSX).\nIf it does improve readability enough, and are not worried about portability, we may introduce a list of permissible characters that are commonly used."
},

{
    "location": "AcceptableUnicode/#",
    "page": "Acceptable Unicode characters:",
    "title": "Acceptable Unicode characters:",
    "category": "page",
    "text": ""
},

{
    "location": "AcceptableUnicode/#Acceptable-Unicode-characters:-1",
    "page": "Acceptable Unicode characters:",
    "title": "Acceptable Unicode characters:",
    "category": "section",
    "text": "Using Unicode seems to be irresistible. However, we must ensure avoiding problematic Unicode usage.Below is a list of acceptable Unicode characters. All characters not listed below are forbidden. We forbid the use of accents (dot, hat, vec, etc.), because this can lead to visually ambiguous characters."
},

{
    "location": "AcceptableUnicode/#Acceptable-lower-case-Greek-letters:-1",
    "page": "Acceptable Unicode characters:",
    "title": "Acceptable lower-case Greek letters:",
    "category": "section",
    "text": "α # (alpha)\nβ # (beta)\nδ # (delta)\nϵ # (epsilon)\nε # (varepsilon)\nγ # (gamma)\nκ # (kappa)\nλ # (lambda)\nμ # (mu)\nν # (nu)\nη # (eta)\nω # (omega)\nπ # (pi)\nρ # (rho)\nσ # (sigma)\nθ # (theta)\nχ # (chi)\nξ # (xi)\nζ # (zeta)\nϕ # (psi)\nφ # (varphi)"
},

{
    "location": "AcceptableUnicode/#Acceptable-upper-case-Greek-letters:-1",
    "page": "Acceptable Unicode characters:",
    "title": "Acceptable upper-case Greek letters:",
    "category": "section",
    "text": "Δ # (Delta)\n∑ # (Sigma)\nΓ # (Gamma)\nΩ # (Omega)\nΨ # (Psi)\n<!-- Φ # (Phi) removed in favor of lowercase psi -->"
},

{
    "location": "AcceptableUnicode/#Acceptable-mathematical-symbols:-1",
    "page": "Acceptable Unicode characters:",
    "title": "Acceptable mathematical symbols:",
    "category": "section",
    "text": "∫ # (int)\n∬ # (iint)\n∭ # (iiint)\n∞ # (infinity)\n≈ # (approx)\n∂ # (partial)\n∇ # (nabla/del), note that nabla and del are indistinguishable\n∀ # (forall)\n≥ # (greater than equal to)\n≤ # (less than equal to)\n<!-- ∈ # (in) removed in favor of epsilon -->"
},

]}