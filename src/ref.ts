/**
   * Helper function to return the financialYear entities for the given org ids
   */
  // private async getFinancialYearEntities(organisationUnitIds: number[]) {
  //   const organisationEntities =
  //     await this.organisationUnitRepository.findEntitiesWhere({
  //       id: In(organisationUnitIds)
  //     });

  //   const orgIds = await getOrgIds(organisationUnitIds, organisationEntities);

  //   return this.financialYearRepository.findEntitiesWithCommonJoin({
  //     organisationUnit: {
  //       id: In(orgIds)
  //     }
  //   });
  // }

  // /**
  //  * Helper function to generate the period keys for each aggregation period
  //  */
  // private getAggregationPeriodKey(
  //   aggregationPeriod: AggregationPeriod
  // ): string {
  //   switch (aggregationPeriod) {
  //     case AggregationPeriod.Month:
  //       return "Month total";
  //     case AggregationPeriod.CalendarYear:
  //       return "Calendar year total";
  //     case AggregationPeriod.FinancialYear:
  //       return "Financial year total";
  //     case AggregationPeriod.FinancialQuarter:
  //       return "Financial quarter total";
  //     default:
  //       throw new Error("Invalid aggregation period");
  //   }
  // }

  // private async groupEmissionsByMonth(
  //   emissions: EmissionOutputEntity[]
  // ): Promise<EmissionsTimeseries[]> {
  //   let aggregatedEmissions: EmissionsTimeseries[] = [];
  //   const emissionsByMonth: { [key: string]: EmissionOutputEntity[] } = {};
  //   const monthTotal: EmissionsTimeseries = {
  //     key: "",
  //     data: []
  //   };

  //   emissions.forEach((emission) => {
  //     const month = emission.month?.monthName || "Invalid Month Name";
  //     if (!emissionsByMonth[month]) {
  //       emissionsByMonth[month] = [];
  //     }
  //     emissionsByMonth[month]?.push(emission);
  //   });

  //   // Calculate total emissions for each month
  //   for (const monthName in emissionsByMonth) {
  //     const emissionsForMonth = emissionsByMonth[monthName];
  //     const totalEmissions = emissionsForMonth?.reduce(
  //       (sum, emission) => sum + (emission.co2e || 0),
  //       0
  //     );
  //     monthTotal?.data?.push({
  //       period: monthName,
  //       amount: totalEmissions || 0
  //     });
  //   }

  //   aggregatedEmissions.push(monthTotal);
  //   return aggregatedEmissions;
  // }

  // private async groupEmissionsByCalendarYear(
  //   emissions: EmissionOutputEntity[]
  // ): Promise<EmissionsTimeseries[]> {
  //   let aggregatedEmissions: EmissionsTimeseries[] = [];
  //   const calendarYearTotal: EmissionsTimeseries = {
  //     key: "",
  //     data: []
  //   };
  //   const emissionsByCalendarYear: {
  //     [key: string]: EmissionOutputEntity[];
  //   } = {};

  //   emissions.forEach((emission) => {
  //     const monthName = emission.month?.monthName || "Invalid Month Name";
  //     const year = monthName.split(" ")[1];

  //     if (!emissionsByCalendarYear[year!]) {
  //       emissionsByCalendarYear[year!] = [];
  //     }

  //     if (emissionsByCalendarYear[year!]) {
  //       emissionsByCalendarYear[year!]?.push(emission);
  //     }
  //   });

  //   // Calculate total emissions for each calendar year
  //   for (const year in emissionsByCalendarYear) {
  //     const emissionsForYear = emissionsByCalendarYear[year];
  //     const totalEmissions = emissionsForYear?.reduce(
  //       (sum, emission) => sum + (emission.co2e || 0),
  //       0
  //     );
  //     calendarYearTotal?.data?.push({
  //       period: `20${year}`,
  //       amount: totalEmissions || 0
  //     });
  //   }

  //   aggregatedEmissions.push(calendarYearTotal);
  //   return aggregatedEmissions;
  // }

  // private async groupEmissionsByFinancialYear(
  //   emissions: EmissionOutputEntity[],
  //   financialYearEntities: FinancialYearEntity[]
  // ): Promise<EmissionsTimeseries[]> {
  //   let aggregatedEmissions: EmissionsTimeseries[] = [];
  //   const fyTotal: EmissionsTimeseries = {
  //     key: "",
  //     data: []
  //   };
  //   const emissionsByFinancialYear: {
  //     [key: string]: EmissionOutputEntity[];
  //   } = {};

  //   financialYearEntities.forEach((financialYear) => {
  //     if (financialYear.label) {
  //       emissionsByFinancialYear[financialYear.label] = [];
  //     }
  //   });

  //   emissions.forEach((emission) => {
  //     const [monthName, year] = emission.month?.monthName?.split(" ") ?? [];

  //     const financialYear = financialYearEntities.find((fy) => {
  //       if (
  //         monthName !== undefined &&
  //         year !== undefined &&
  //         fy.startMonth &&
  //         fy.endMonth
  //       ) {
  //         if (
  //           emission.month?.startDate &&
  //           emission.month?.endDate &&
  //           fy.startMonth.startDate &&
  //           fy.endMonth.endDate
  //         ) {
  //           const emissionStartMonth = new Date(emission.month.startDate);
  //           const emisisonEndMonth = new Date(emission.month.endDate);
  //           const fyStartMonth = new Date(fy.startMonth.startDate);
  //           const fyEndMonth = new Date(fy.endMonth.endDate);
  //           return (
  //             emissionStartMonth >= fyStartMonth &&
  //             emisisonEndMonth <= fyEndMonth
  //           );
  //         }
  //       }
  //       return false;
  //     });

  //     if (financialYear && financialYear.label) {
  //       emissionsByFinancialYear[financialYear.label]?.push(emission);
  //     }
  //   });

  //   // Calculate total emissions for each financial year
  //   for (const [period, emissionsForYear] of Object.entries(
  //     emissionsByFinancialYear
  //   )) {
  //     const totalEmissions = emissionsForYear.reduce((sum, month) => {
  //       const emission = emissionsForYear.find((e) => e.co2e);
  //       return sum + (emission?.co2e || 0);
  //     }, 0);
  //     fyTotal.data?.push({ period, amount: totalEmissions });
  //   }

  //   aggregatedEmissions.push(fyTotal);
  //   return aggregatedEmissions;
  // }

  // private async groupEmissionsByFinancialQuarter(
  //   emissions: EmissionOutputEntity[],
  //   financialYearEntities: FinancialYearEntity[]
  // ): Promise<EmissionsTimeseries[]> {
  //   let aggregatedEmissions: EmissionsTimeseries[] = [];
  //   const financalQuarterTotal: EmissionsTimeseries = {
  //     key: "",
  //     data: []
  //   };
  //   const emissionsByFinancialQuarter: {
  //     [key: string]: EmissionOutputEntity[];
  //   } = {};

  //   const earliestEmission = emissions.reduce(
  //     (earliest: EmissionOutputEntity | null, emission) => {
  //       if (
  //         emission.month?.startDate &&
  //         (!earliest ||
  //           new Date(emission.month.startDate) <
  //             new Date(earliest.month?.startDate || ""))
  //       ) {
  //         return emission;
  //       }
  //       return earliest;
  //     },
  //     null
  //   );

  //   // Get the list of financial years for a particular orgId
  //   financialYearEntities.forEach((financialYear) => {
  //     if (
  //       financialYear.label &&
  //       financialYear.startMonth &&
  //       financialYear.startMonth.startDate &&
  //       financialYear.endMonth &&
  //       financialYear.endMonth.endDate
  //     ) {
  //       const startMonth = new Date(financialYear.startMonth.startDate);
  //       const endMonth = new Date(financialYear.endMonth.endDate);

  //       let currentMonth = earliestEmission
  //         ? new Date(
  //             Math.max(
  //               startMonth.getTime(),
  //               new Date(earliestEmission.month?.startDate || "").getTime()
  //             )
  //           )
  //         : startMonth;
  //       let quarterIndex = getQuarterIndex(currentMonth, startMonth);

  //       while (currentMonth <= endMonth) {
  //         const quarterKey = `Q${quarterIndex} - ${financialYear.label}`;
  //         emissionsByFinancialQuarter[quarterKey] = [];

  //         const quarterEndMonth = new Date(
  //           currentMonth.getFullYear(),
  //           currentMonth.getMonth() + 2,
  //           currentMonth.getDate()
  //         );

  //         emissions.forEach((emission) => {
  //           if (emission.month?.startDate && emission.month.endDate) {
  //             const emissionStartMonth = new Date(emission.month.startDate);
  //             const emissionEndMonth = new Date(emission.month.endDate);

  //             if (
  //               emissionStartMonth >= currentMonth &&
  //               emissionEndMonth <= quarterEndMonth
  //             ) {
  //               emissionsByFinancialQuarter[quarterKey]?.push(emission);
  //             }
  //           }
  //         });

  //         currentMonth.setMonth(currentMonth.getMonth() + 3);
  //         quarterIndex++;
  //       }
  //     }
  //   });

  //   for (const [period, emissionsForQuarter] of Object.entries(
  //     emissionsByFinancialQuarter
  //   )) {
  //     const totalEmissions = emissionsForQuarter.reduce((sum, emission) => {
  //       return sum + (emission?.co2e || 0);
  //     }, 0);

  //     financalQuarterTotal.data?.push({ period, amount: totalEmissions });
  //   }

  //   aggregatedEmissions.push(financalQuarterTotal);
  //   return aggregatedEmissions;
  // }

  // /**
  //  * Helper function to group emissions by given aggregation period.
  //  *
  //  * @param emissions - The emissions to be grouped.
  //  * @param aggregationPeriod - Aggregation period
  //  */
  // private async aggregateEmissionsByPeriod(
  //   emissions: EmissionOutputEntity[],
  //   aggregationPeriod: AggregationPeriod,
  //   organisationUnitIds: number[]
  // ): Promise<EmissionsTimeseries[]> {
  //   let aggregatedEmissions: EmissionsTimeseries[] = [];

  //   // Get the list of financial years for a particular orgId
  //   const financialYearEntities =
  //     await this.getFinancialYearEntities(organisationUnitIds);

  //   switch (aggregationPeriod) {
  //     /*
  //       Aggregate by MONTH
  //     */
  //     case AggregationPeriod.Month:
  //       return this.groupEmissionsByMonth(emissions);
  //     /*
  //       Aggregate by CALENDAR YEAR
  //     */
  //     case AggregationPeriod.CalendarYear:
  //       return this.groupEmissionsByCalendarYear(emissions);
  //     /*
  //       Aggregate by FINANCIAL YEAR
  //     */
  //     case AggregationPeriod.FinancialYear:
  //       return this.groupEmissionsByFinancialYear(
  //         emissions,
  //         financialYearEntities
  //       );
  //     /*
  //       Aggregate by FINANCIAL QUARTER
  //     */
  //     case AggregationPeriod.FinancialQuarter:
  //       return this.groupEmissionsByFinancialQuarter(
  //         emissions,
  //         financialYearEntities
  //       );
  //     default:
  //       throw new Error("Invalid aggregation period");
  //   }
  // }