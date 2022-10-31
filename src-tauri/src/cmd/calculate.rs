use emission_spectrum_lib_rs::prelude::*;

#[command]
pub fn calculate(
    t_r: f64,
    t_v: f64,
    wave_length_start: f64,
    wave_length_range: f64,
    number_of_division: f64,
    fwhm: f64,
) -> Vec<(f64, f64)> {
    let increment = wave_length_range / number_of_division;
    let wave_lengths: Vec<f64> = (0..number_of_division as usize)
        .map(|v| wave_length_start + increment * v as f64)
        .collect();

    let config = CalcConfig {
        dunham_expression_params_u: vec![
            vec![0.0, 1153.3, -19.48, -0.4],
            vec![1.320, -0.022],
            vec![-4.0e-6],
        ],
        dunham_expression_params_l: vec![
            vec![0.0, 1308.1, -11.10, 0.093],
            vec![1.4172, -0.0184, 0.00011],
            vec![-6.5e-6],
        ],
        fwhm,
        lu: 2.0,
        ll: 1.0,
        q: vec![
            (0, 0, 0.6765),
            (0, 1, 0.2821),
            (1, 1, 0.2316),
            (1, 2, 0.4801),
            (2, 2, 0.0297),
            (2, 3, 0.3935),
        ],
        r: 0.0,
        spin_configs: vec![
            (
                CouplingKind::B,
                DoubletBranchKind::P1,
                (6..21).map(|v| v as f64 + 0.5).collect(),
            ),
            (
                CouplingKind::B,
                DoubletBranchKind::P2,
                (6..21).map(|v| v as f64 + 0.5).collect(),
            ),
            (
                CouplingKind::B,
                DoubletBranchKind::Q1,
                (2..26).map(|v| v as f64 + 0.5).collect(),
            ),
            (
                CouplingKind::B,
                DoubletBranchKind::Q2,
                (4..25).map(|v| v as f64 + 0.5).collect(),
            ),
            (
                CouplingKind::B,
                DoubletBranchKind::R1,
                (1..26).map(|v| v as f64 + 0.5).collect(),
            ),
            (
                CouplingKind::B,
                DoubletBranchKind::R2,
                (3..26).map(|v| v as f64 + 0.5).collect(),
            ),
        ],
        spin_quantum_number_kind: SpinQuantumNumberKind::Doublet,
        t_e_u: Term::new(49399.6),
        t_e_l: Term::new(0.0),
        t_r: Term::new(t_r),
        t_v: Term::new(t_v),
        wave_lengths: wave_lengths.to_vec(),
    };

    let result = calc(config);

    wave_lengths.into_iter().zip(result).collect()
}
