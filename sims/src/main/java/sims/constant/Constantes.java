package sims.constant;

import java.util.List;

import sims.model.TypeTrait;

public class Constantes {

    public static List<TypeTrait> TYPES_TRAIT_CLASSIQUE = List.of(
        TypeTrait.BASE,
        TypeTrait.FANTOME,
        TypeTrait.ENFANCE
    );

    public static List<TypeTrait> TYPES_TRAIT_BOUTIQUE = List.of(
        TypeTrait.BOUTIQUE
    );

    public static List<TypeTrait> TYPES_TRAIT_EDUCATION = List.of(
        TypeTrait.EDUCATION
    );

    public static List<TypeTrait> TYPES_TRAIT_A_CONDITION = List.of(
        TypeTrait.CARRIERE,
        TypeTrait.NOURRITURE,
        TypeTrait.MONTAGNE,
        TypeTrait.MALADIE,
        TypeTrait.COMPETENCE
    );

    public static List<TypeTrait> TYPES_TRAIT_A_EFFETS = List.of(
        TypeTrait.HERITAGE,
        TypeTrait.STYLE_DE_VIE
    );

    public static List<TypeTrait> TYPES_TRAIT_BONUS = List.of(
        TypeTrait.BONUS
    );

    public static List<TypeTrait> TYPES_TRAIT_ASPIRATION = List.of(
        TypeTrait.ASPIRATION
    );
}
